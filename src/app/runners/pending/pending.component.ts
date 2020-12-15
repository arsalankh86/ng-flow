import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Utils } from '../../common';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { DatePipe } from '../../../../node_modules/@angular/common';
import 'rxjs/add/operator/takeWhile';

declare var $: any;

@Component({
  selector: 'button-view',
  template: `
  <button [class]="(rowData.status === 9) ? 'btn btn-md btn-custom btn-danger' : 'btn btn-md btn-custom btn-success'" (click)="onClick()"><i class="nb-menu"></i></button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() onUpdateStatus: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onClick() {
    const activeModal = this.modalService.open(OrderDetailComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.order = this.rowData;
  }
}

@Component({
  selector: 'pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit, OnDestroy {

  settings = {
    mode: 'inline',
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      save: false,
      cancel: false,
    },
    columns: {
      id: {
        title: 'Order#',
        type: 'string',
        filter: false,
      },
      customer_name: {
        title: 'Customer',
        type: 'string',
        filter: false,
      },
      view: {
        title: 'Details',
        type: 'custom',
        renderComponent: ButtonViewComponent,
      },
    },
    rowClassFunction: (row) =>{
      if(row.data.status === 1 || row.data.status === 2){
        return 'pending';
      } else if(row.data.status === 3 || row.data.status === 4) {
        return 'ready2pickup'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  currentUser: any;
  socket: any;
  today: any;
  pipe: any;
  pastOrders = [];
  audio: any;
  hideSoundBtn: string;
  showEnableAudio: boolean;
  alive = true;

  constructor(private apiService: ApiService,
    private cookieService: CookieService,
    private toastrService: ToastrService,
    private router: Router) { 
      this.pipe = new DatePipe('en-US');
      if (!(this.cookieService.check('user') && this.cookieService.get('user') != '')) {
        var redirect = '/auth/login';
        this.router.navigateByUrl(redirect);
        return;
      } else {
        this.currentUser = Utils.decodeJwt(this.cookieService.get('user'));
      }
      this.getInfo();
  }

  ngOnInit() {
    this.audio = new Audio();
    this.createSocket();
    this.today = Date.now();
    this.hideSoundBtn = localStorage.getItem('hideSoundBtn');
    this.showEnableAudio = true;

    // get pending orders every 10 seconds only for runners
    if (this.currentUser.role === 3) {
      IntervalObservable.create(10000)
        .takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {
          this.getInfo();
          this.today = Date.now();
        });
    }
  }

  ngOnDestroy() {
    this.socket.disconnect();
    this.alive = false;
  }

  createSocket() {
    this.socket = io(environment.SERVER_URL);
    this.socket.on('message', (data) => {
      Utils.logs('Order was updated, Refreshing data now...', data);
      this.getInfo();
    });
    this.socket.on('onconnected', (data) => {
      Utils.logs('Socket.io was connected, user_id = ' + data.id);
    });
    this.socket.on('disconnect', () => {
      Utils.logs('Socket connection was disconnected');
    });
  }

  getInfo() {
    this.apiService.getPendingOrdersByRunnerId(this.currentUser.runner_id).subscribe(
      res => {
          // console.log(res);
          if (res) {
              if (!res.err) {
                let data = [];
                const newOrders = res.response;
                for (let order of res.response) {
                  if (order.status === 0) {
                    order.status = (order.order_type === 'FAST-LINE') ? 2 : 1;
                    this.updateOrderStatus(order.id, order.status);
                  }
                  let price = 0;
                  for (let item of order.items) {
                    price += (item.price * (1 + item.tax));
                  }

                  // console.log('order %o ', order)
                  data.push({
                    id: order.id,
                    restaurant_id: order.restaurant_id,
                    customer_id: order.customer_id,
                    customer_name: order.customer_name,
                    customer_token: order.customer_token,
                    transaction_id: order.transaction_id,
                    status: order.status,
                    currency: order.currency,
                    customer_location: order.customer_location,
                    currency_symbol: order.currency_symbol,
                    paid: order.currency_symbol + order.order_total.toFixed(2),
                    created_at: this.pipe.transform(new Date(order.created_at * 1000), 'M/d/yy, h:mm a'),
                    ready_at: order.ready_at,
                    items: order.items,
                    runner_id: order.runner_id,
                    order_items_qty: order.order_items_qty,
                    order_delivery_fee: order.order_delivery_fee,
                    order_service_fee: order.order_service_fee,
                    order_subtotal: order.order_subtotal,
                    order_tax: order.order_tax,
                    order_total: order.order_total,
                  });
                }
                this.source.load(data);
                if (this.pastOrders.length > 0) {
                  newOrders.forEach(order => {
                    // check if order_id exists in past orders
                    if (this.pastOrders.filter(o => o.id === order.id).length === 0 ){
                      // console.log('new order');
                      this.audio.load();
                      this.audio.play();
                    }

                  });
                  this.pastOrders = newOrders;
                } else {
                  this.pastOrders = newOrders;
                }
              } else {
                  this.toastrService.error('Cannot fetch orders!');
              }
          } else {
              this.toastrService.error('Cannot fetch orders!');
          }
      });
  }

  updateOrderStatus(order_id, status) {
    this.apiService.updateOrderStatus(order_id, status).subscribe(
      res => {
          // console.log(res);
          if (res) {
              if (!res.err) {
                this.toastrService.info('Updated successfully');
              } else {
                  this.toastrService.error('Update Failed!');
              }
          } else {
              this.toastrService.error('Update Failed!');
          }
      });
  }

  enableAudio() {
    localStorage.setItem('hideSoundBtn', 'true');
    this.audio.src = '../../assets/sounds/WoopWoop.wav';
    this.audio.load();
    this.audio.play();
    this.showEnableAudio = false;
  }
  disableAudio() {
    this.audio.src = '';
    this.showEnableAudio = true;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Utils } from '../../common';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { formatDate, DatePipe } from '../../../../node_modules/@angular/common';
import 'rxjs/add/operator/takeWhile';
import { CustomerComponent } from '../customer/customer.component';
import { TextAreaComponent } from './textarea.component';
import { ButtonViewComponent } from './buttonview.component';

declare var $: any;

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
      status: {
        title: 'Status',
        type: 'string',
        valuePrepareFunction: (status) => {
          if (status == 1) return 'New Order';  
          if (status == 2) return 'New Order (Pickup)'; 
          if (status == 3) return 'Ready To Pickup';
          if (status == 4) return 'Ready To Delivery';
          if (status == 9) return 'Waiting for Runner';
          if (status == 10) return 'Runner accepted order';
        },
      },
      id: {
        title: 'Order#',
        type: 'string',
        filter: true,
        sort: true,
        sortDirection:  'desc',
      },
      customer_name: {
        title: 'Customer',
        type: 'custom',
        renderComponent: CustomerComponent,
        filter: false,
      },
      location_zipcode: {
        title: 'Location',
        type: 'string',
        filter: false,
      },
      // paid: {
      //   title: 'Order Total',
      //   type: 'string',
      // },
      created_at: {
        title: 'Created At',
        type: 'string',
        valuePrepareFunction: (timestamp) => {
          if (timestamp == 0)
            return '';
          const now = this.pipe.transform(Date.now(), 'M/d/yy');
          const createdAt = this.pipe.transform(new Date(timestamp * 1000), 'M/d/yy');
          if (now === createdAt) {
            return 'Today, ' + this.pipe.transform(new Date(timestamp * 1000), 'h:mm a');
          } else {
            return this.pipe.transform(new Date(timestamp * 1000), 'short');
          }
        },
        filter: false,
      },
      ready_at: {
        title: 'Ready At',
        type: 'string',
        valuePrepareFunction: (timestamp) => {
          if (timestamp == 0)
            return '';
          const now = this.pipe.transform(Date.now(), 'M/d/yy');
          const createdAt = this.pipe.transform(new Date(timestamp * 1000), 'M/d/yy');
          if (now === createdAt) {
            return 'Today, ' + this.pipe.transform(new Date(timestamp * 1000), 'h:mm a');
          } else {
            return this.pipe.transform(new Date(timestamp * 1000), 'short');
          }
        },
        filter: false,
      },
      notes: {
        title: 'Notes',
        type: 'custom',
        filter: false,
        renderComponent: TextAreaComponent,
      },
      view: {
        title: 'Action',
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
    // this.createSocket();
    this.today = Date.now();
    this.hideSoundBtn = localStorage.getItem('hideSoundBtn');
    this.showEnableAudio = true;

    // get pending orders every 50 seconds only for front desk users
    // if (this.currentUser.role === 2) {
    //   IntervalObservable.create(10000)
    //     .takeWhile(() => this.alive) // only fires when component is alive
    //     .subscribe(() => {
    //       this.getInfo();
    //       this.today = Date.now();
    //     });
    // }
  }

  ngOnDestroy() {
    // this.socket.disconnect();
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
    this.apiService.getPendingOrders(this.currentUser.restaurant_id).subscribe(
      res => {
          if (res) {
              if (!res.err) {
                let data = [];
                const newOrders = res.response;
                console.log(newOrders)

                for (let order of res.response) {
                  if (order.status === 0) {
                    order.status = (order.order_type === 'FAST-LINE') ? 2 : 1;
                    this.updateOrderStatus(order.id, order.status);
                  }
                  // if (order.status === 0) {
                  //   // authorize charge
                  //   console.log('authorize charge');
                  //   this.alive = false;
                  //   this.apiService.authorizeCharge(order.customer_id, order.order_total, order.restaurant_id, order.id, order.card_last4, order.order_type, order.source, order.apple_pay_id, order.customer_name).subscribe(response => {
                  //     this.alive = true;
                  //     console.log(response);
                  //     order.status = (order.order_type === 'FAST-LINE') ? 2 : 1; 
                  //     let price = 0;
                  //     for (let item of order.items) {
                  //       price += (item.price * (1 + item.tax));
                  //     }
                  //     data.push({
                  //       id: order.id,
                  //       customer_id: order.customer_id,
                  //       customer_name: order.customer_name,
                  //       customer_token: order.customer_token,
                  //       customer_location: order.customer_location,
                  //       transaction_id: order.transaction_id,
                  //       status: order.status,
                  //       paid: '$' + order.order_total.toFixed(2),
                  //       created_at: order.created_at,
                  //       ready_at: order.ready_at,
                  //       items: order.items,
                  //     });

                  //     this.source.load(data);
                  //     if (this.pastOrders.length > 0) {
                  //       newOrders.forEach(order => {
                  //         // check if order_id exists in past orders
                  //         if (this.pastOrders.filter(o => o.id === order.id).length === 0 ){
                  //           console.log('new order');
                  //           this.audio.load();
                  //           this.audio.play();
                  //         }
                  //       });
                  //       this.pastOrders = newOrders;
                  //     } else {
                  //       this.pastOrders = newOrders;
                  //     }
                  //   });
                  // } else {
                  //   let price = 0;
                  //   for (let item of order.items) {
                  //     price += (item.price * (1 + item.tax));
                  //   }
                  //   data.push({
                  //     id: order.id,
                  //     customer_id: order.customer_id,
                  //     customer_name: order.customer_name,
                  //     customer_token: order.customer_token,
                  //     customer_location: order.customer_location,
                  //     transaction_id: order.transaction_id,
                  //     status: order.status,
                  //     paid: '$' + order.order_total.toFixed(2),
                  //     created_at: order.created_at,
                  //     ready_at: order.ready_at,
                  //     items: order.items,
                  //   });

                  // }


                  let price = 0;
                  for (let item of order.items) {
                    price += (item.price * (1 + item.tax));
                  }

                  // console.log('outside if ' + order.status)
                  data.push({
                    ...order,
                    paid: order.currency_symbol + order.order_total.toFixed(2),
                  });
                }
                this.source.load(data);
                if (this.pastOrders.length > 0) {
                  newOrders.forEach(order => {
                    // check if order_id exists in past orders
                    if (this.pastOrders.filter(o => o.id === order.id).length === 0 ){
                      Utils.logs('new order');
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

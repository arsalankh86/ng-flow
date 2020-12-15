import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { of  } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { MatSort, Sort, MatPaginator, PageEvent } from '@angular/material';
import { fromMatSort, sortRows, fromMatPaginator, paginateRows } from '../../services/datasource-utils';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Utils } from '../../common';
import * as io from 'socket.io-client';
import { CustomConfirmComponent } from '../../custom-component/custom-confirm/custom-confirm.component';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'button-refund',
  template: `
  <button class="btn btn-md btn-warning btn-custom" (click)="onClick()"><i class="fa fa-undo"></i></button>
  `,
})
export class ButtonRefundComponent implements OnInit {
  @Input() order_id: any;

  constructor(private modalService: NgbModal,
    private apiService: ApiService,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  onClick() {
    // console.log('Calling CustomConfirmComponent')
    var self = this;
    const activeModal = this.modalService.open(CustomConfirmComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.close = function(newData) {
      self.refund();
    };
    activeModal.componentInstance.title = "Refund";
    activeModal.componentInstance.description = 'Would you like to refund this order?';
  }
  
  refund() {
    this.apiService.refundOrder(this.order_id).subscribe(
      res => {
          // console.log(res);
          if (res) {
              if (!res.err) {
                this.toastrService.error('Refunded!');
              } else {
                this.toastrService.error('Cannot be refunded!');
              }
          } else {
              this.toastrService.error('Cannot be refunded!');
          }
      });
  }
}

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedRows$: Observable<any>;
  totalRows$: Observable<number>;
  sortEvents$: Observable<Sort>;
  pageEvents$: Observable<PageEvent>;
  currentUser: any;
  socket: any;

  constructor(private apiService: ApiService,
    private cookieService: CookieService,
    private toastrService: ToastrService,
    private router: Router) { 
      if (!(this.cookieService.check('user') && this.cookieService.get('user') != '')) {
        const redirect = '/auth/login';
        this.router.navigateByUrl(redirect);
        return;
      } else {
        this.currentUser = Utils.decodeJwt(this.cookieService.get('user'));
      }

      this.getInfo();
    }
      
    ngOnInit() {
      // this.createSocket();
    }
  
    ngOnDestroy() {
      // this.socket.disconnect();
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
      this.apiService.getCompletedOrders(this.currentUser.client_id).subscribe(
        res => {
            // console.log(res);
            if (res) {
                if (!res.err) {
                  let data = [];
                  for (let order of res.response) {
                    let price = 0;
                    for (let item of order.items) {
                      price += (item.price * (1 + item.tax));
                    }

                    let time = 0;
                    switch(order.status) {
                      case 5:
                        time = order.completed_at;
                        break;
                      case 6:
                        time = order.refunded_at;
                        break;
                      case 7:
                        time = order.cancelled_at;
                        break;
                    }

                    data.push({
                      id: order.id,
                      status: order.status,
                      customer_id: order.customer_id,
                      customer_name: order.customer_name,
                      customer_token: order.customer_token,
                      transaction_id: order.transaction_id,
                      paid: order.order_total.toFixed(2),
                      currency_symbol: order.currency_symbol,
                      currency: order.currency,
                      created_at: order.created_at,
                      ready_at: order.ready_at,
                      items: order.items,
                      time: Utils.getDate(time),
                    });
                  }
                  const rows$ = of(data);
                  this.sortEvents$ = fromMatSort(this.sort);
                  this.pageEvents$ = fromMatPaginator(this.paginator);
                  this.totalRows$ = rows$.pipe(map(rows => rows.length));
                  this.displayedRows$ = rows$.pipe(sortRows(this.sortEvents$), paginateRows(this.pageEvents$));
                } else {
                    this.toastrService.error('Cannot fetch orders!');
                }
            } else {
                this.toastrService.error('Cannot fetch orders!');
            }
        });
    }
}

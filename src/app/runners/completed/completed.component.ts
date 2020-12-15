import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { of  } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { MatSort, Sort, MatPaginator, PageEvent } from '@angular/material';
import { fromMatSort, sortRows, fromMatPaginator, paginateRows } from '../../services/datasource-utils';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Utils } from '../../common';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { DatePipe } from '../../../../node_modules/@angular/common';

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
  pipe: any;

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
      this.pipe = new DatePipe('en-US');
      this.getInfo();
    }

    ngOnInit() {
      this.createSocket();
    }
  
    ngOnDestroy() {
      this.socket.disconnect();
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
      this.apiService.getCompletedOrdersByRunnerId(this.currentUser.runner_id).subscribe(
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
                      time: this.pipe.transform(new Date(time * 1000), 'M/d/yy, h:mm a'),
                      order_items_qty: order.order_items_qty,
                      order_delivery_fee: order.order_delivery_fee,
                      order_service_fee: order.order_service_fee,
                      order_subtotal: order.order_subtotal,
                      order_tax: order.order_tax,
                      order_total: order.order_total,
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

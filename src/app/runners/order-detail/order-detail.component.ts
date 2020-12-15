import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  @Input() order: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activeModal: NgbActiveModal,
    private apiService: ApiService,
    private toastrService: ToastrService) {

  }

  ngOnInit() {
    // console.log(this.order)
  }

  onAcceptOrDeclineOrder(isOrderAccepted) {
    this.closeModal();
    this.updateRunnerInOrder(isOrderAccepted);
    if (isOrderAccepted === 'Accepted') {
      this.updateOrderStatus(10);
    } else {
      this.updateOrderStatus(1);
      this.apiService.updateDeclinedOrders(this.order.runner_id, this.order.id).subscribe(res => {
        // console.log(res);
      });
    }
  }

  onClickComplete() {
    this.closeModal();
    this.updateOrderStatus(5);
  }

  updateOrderStatus(status) {
    this.apiService.updateOrderStatus(this.order.id, status).subscribe(
      res => {
          // console.log(res);
          if (res) {
              if (!res.err) {
                this.toastrService.info('Updated successfully');
                this.order.status = status;
                this.updatePendingOrdersCount();
              } else {
                  this.toastrService.error('Update Failed!');
              }
          } else {
              this.toastrService.error('Update Failed!');
          }
      });
  }

  updatePendingOrdersCount() {
    this.apiService.updatePendingOrders(this.order.runner_id).subscribe(res => {
      if (res.err) {
        console.error(res.err);
      }
    });
  }

  updateRunnerInOrder(isOrderAccepted) {
    // console.log(`${this.order.id}, ${this.order.runner_id}, ${isOrderAccepted}`)
    const runnerId = (isOrderAccepted === 'Accepted') ? this.order.runner_id : 0;
    this.apiService.updateRunnerInOrder(this.order.id, runnerId, isOrderAccepted).subscribe(
      res => {
          // console.log(res);
      });
  }

  closeModal() {
    this.activeModal.close();
  }
}

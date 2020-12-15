import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { of  } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material';
import { fromMatSort, sortRows, fromMatPaginator, paginateRows } from '../../services/datasource-utils';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  @Input() order: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedRows$: Observable<any>;
  totalRows$: Observable<number>;
  runners: any;
  selectedRunnerId: string;
  selectedRunnerName: string;
  runnerPlaceholder = 'Choose runner';
  alertMessage: string;

  constructor(private activeModal: NgbActiveModal,
    private apiService: ApiService,
    private toastrService: ToastrService) {}

  ngOnInit() {
    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    const pageEvents$: Observable<PageEvent> = fromMatPaginator(this.paginator);

    const rows$ = of(this.order.items);

    this.totalRows$ = rows$.pipe(map(rows => rows.length));
    this.displayedRows$ = rows$.pipe(sortRows(sortEvents$), paginateRows(pageEvents$));

    this.alertMessage = (this.order.status === 9) ? 'Order needs to be accepted by runner.' : 'Order has been accepted by runner.';

    if (this.order.status === 1 || this.order.status === 9 || this.order.status === 10) {
      this.apiService.getRunners(this.order.client_id).subscribe(res => {
        if (res.response) {
          this.runners = res.response;
        }
      });
      if (this.order.runner_id === 0) {
        let section = this.order.customer_location.split(',');
        if (section.length > 0) {
          section = section[0];
        } else {
          section = this.order.customer_location;
        }
        this.apiService.getRunnerBySection(section, this.order.id, this.order.client_id).subscribe(res => {
          if (res.response.length > 0) {
            this.selectedRunnerName = res.response[0].name;
            this.selectedRunnerId = (this.order.status === 1 || this.order.status === 10) ? res.response[0].id : undefined;
            this.runnerPlaceholder = 'Change runner';
          } else {
            this.runnerPlaceholder = 'Choose runner';
          }
        });

      } else {
        this.apiService.getRunnerById(this.order.runner_id).subscribe(res => {
          if (res.response.length > 0) {
            this.selectedRunnerName = res.response[0].name;
            // this.selectedRunnerId = res.response[0].id;
            this.runnerPlaceholder = 'Change runner';
          }
        });
      }

    }
  }

  onSelectRunner() {
    this.selectedRunnerName = this.runners.filter(runner => runner.id == this.selectedRunnerId)[0].name;
  }

  onAssignRunner() {
    this.closeModal();
    this.updateRunnerInOrder();
  }

  onClickReadyToPickup() {
    this.closeModal();
    this.updateOrderStatus(3);
  }

  onClickComplete() {
    this.closeModal();
    this.updateOrderStatus(5);
  }

  onCancelAuthorization() {
    this.closeModal();
    this.apiService.cancelOrder(this.order.id).subscribe(
      res => {
          if (res) {
              if (!res.err) {
                this.toastrService.info('Order has been successfully cancelled!');
                this.order.status = 7;
              } else {
                  this.toastrService.error('Cancel order failed!');
              }
          } else {
              this.toastrService.error('Cancel order failed!');
          }
      }
    );
    // this.updateOrderStatus(7);
  }

  updateOrderStatus(status) {
    this.apiService.updateOrderStatus(this.order.id, status).subscribe(
      res => {
          if (res) {
              if (!res.err) {
                this.toastrService.info('Updated successfully');
                this.order.status = status;
                if (status === 9 || status === 5) {
                  this.updatePendingOrdersCount();
                }
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

  updateRunnerInOrder() {
    this.apiService.updateRunnerInOrder(this.order.id, this.selectedRunnerId).subscribe(
      res => {
          this.order.runner_id = this.selectedRunnerId;
          this.updateOrderStatus(9);
      });
  }

  closeModal() {
    this.activeModal.close();
  }
}

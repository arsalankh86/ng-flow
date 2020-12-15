import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';

@Component({
    selector: 'button-view',
    template: `
    <div class="flex-center"><button [class]="(rowData.status === 2 || rowData.status === 1) ? 'btn btn-md btn-custom btn-danger' :
                    (rowData.status === 9) ? 'btn btn-md btn-custom btn-warning' :
                    (rowData.status === 10) ? 'btn btn-md btn-custom btn-info' :
                    'btn btn-md btn-custom btn-success'" (click)="onClick()"><i class="nb-menu"></i></button></div>
    `,
    styleUrls: ['./pending.component.scss'],
  })
  export class ButtonViewComponent implements ViewCell {
    @Input() value: string | number;
    @Input() rowData: any;
  
    constructor(private modalService: NgbModal) {}
  
    onClick() {
      const activeModal = this.modalService.open(OrderDetailComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.order = this.rowData;
    }
  }
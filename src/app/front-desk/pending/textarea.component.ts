import { Component, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table/components/cell/cell-view-mode/view-cell';
import { ApiService } from '../../services/api.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'textarea-view',
    template: `
    <p class="flex-start"><i class="nb-edit" (click)="openModal()" style="font-size: 20px; cursor: pointer;padding-right: 2px;"></i>
        <span>{{rowData.notes}}</span></p>
    `,
    styleUrls: ['./pending.component.scss'],
})
export class TextAreaComponent implements ViewCell {
    @Input() value: string | number;
    @Input() rowData: any;

    constructor(private modalService: NgbModal) { }

    openModal() {
        const activeModal = this.modalService.open(NotesModalComponent, { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.order = this.rowData;
    }
}

@Component({
    selector: 'textarea-view',
    template: `
    <div class="modal-header" style="padding: 10px 16px;">
        <h5 class="modal-title">Notes</h5>
        <i class="nb-close close-modal" (click)="closeModal()"></i>
    </div>
    <div class="modal-body" *ngIf="order">
        <mat-form-field style="width: 100%;">
            <textarea matInput
                    [(ngModel)]="order.notes"
                    cdkTextareaAutosize
                    #autosize="cdkTextareaAutosize"
                    rows="10"
                    cdkAutosizeMinRows="1"
                    cdkAutosizeMaxRows="10"></textarea>
        </mat-form-field>
    </div>
    <div class="modal-footer flex-space-between" style="padding: 10px 16px;">
    <button mat-raised-button (click)="closeModal()">Cancel</button>
        <button mat-raised-button color="primary" (click)="onSave()">Save</button>
    </div>
    `,
    styleUrls: ['./pending.component.scss'],
})
export class NotesModalComponent {
    @Input() order: any;

    constructor(private apiService: ApiService, private activeModal: NgbActiveModal, ) { }

    onSave() {
        console.log(this.order.notes)
        this.apiService.post('order/notes', this.order)
            .subscribe(res => {
                console.log(res)
                this.activeModal.close()
            })

    }

    closeModal() {
        this.activeModal.close()
    }
}


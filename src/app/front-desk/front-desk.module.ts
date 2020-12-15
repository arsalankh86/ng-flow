import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent, ButtonRefundComponent } from './completed/completed.component';
import { FrontDeskComponent } from './front-desk.component';
import { FrontDeskRoutingModule } from './front-desk-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MatExpansionModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatButtonModule, 
  MatNativeDateModule, 
  MatDatepickerModule, 
  MatTableDataSource,
  MatTableModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { CustomModule } from '../custom-component/custom-component.module';
import { CustomerComponent, ModalComponent } from './customer/customer.component';
import { ButtonViewComponent } from './pending/buttonview.component';
import { TextAreaComponent, NotesModalComponent } from './pending/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FrontDeskRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule, 
    MatListModule, 
    MatExpansionModule, 
    MatSortModule,  
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    CustomModule
  ],
  declarations: [
    PendingComponent, 
    CompletedComponent,
    FrontDeskComponent,
    OrderDetailComponent,
    ButtonViewComponent,
    TextAreaComponent,
    ButtonRefundComponent,
    CustomerComponent,
    ModalComponent,
    NotesModalComponent,
  ],
  entryComponents: [
    ButtonViewComponent,
    ButtonRefundComponent,
    OrderDetailComponent,
    CustomerComponent,
    ModalComponent,
    TextAreaComponent,
    NotesModalComponent,
  ]
})
export class FrontDeskModule {}

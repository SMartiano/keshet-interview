import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceFiltersComponent } from './invoice-filters/invoice-filters.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceFiltersComponent,
    InvoiceTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InvoicesRoutingModule
  ],
  providers: [InvoiceService]
})
export class InvoicesModule { }

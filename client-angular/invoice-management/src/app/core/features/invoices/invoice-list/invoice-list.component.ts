import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice.model';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  filters: any = {};
  showPdf: boolean = false;
  pdfUrl: string = '';
  constructor() { }

  ngOnInit(): void { }

  // #region Event
  onSelectedRow(row: Invoice[]) {
    if (row.length == 1) {
      this.pdfUrl = row[0].pdfUrl;
      this.showPdf = true;
    } else {
      this.pdfUrl = '';
      this.showPdf = false;
    }
  }

  onFiltersApply(filters: any) {
    this.filters = { ...filters };
  }

  onTogglePdfChange(event: boolean) {
    this.showPdf = event && (this.pdfUrl != '');
  }
  // #endregion Event
}

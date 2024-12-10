import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  filters: any = {};  // פילטרים שנשלחים
  page: number = 1;
  pageSize: number = 20;
  totalItems: number = 0; // סך כל החשבוניות

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.invoiceService.getInvoices(this.page, this.pageSize, this.filters).subscribe(data => {
      this.invoices = data;
      this.totalItems = data.length; // עדכון סך כל החשבוניות
    });
  }

  applyFilters(filters: any) {
    this.filters = filters;
    this.page = 1; // מאתחלים את הדף
    this.loadInvoices(); // טוענים מחדש את החשבוניות
  }

  onPageChange(page: number) {
    this.page = page;
    this.loadInvoices(); // טוענים מחדש את הדף הנבחר
  }
}

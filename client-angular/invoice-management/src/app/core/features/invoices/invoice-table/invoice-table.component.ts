import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent {
  displayedColumns: string[] = ['description', 'supplier', 'cost'];

  @Output() selectedRow = new EventEmitter<any>();

  @Input() set Filters(value: any) {

    if (!value) return;

    this.filters = value;
    this.dataSource = [];
    this.currentPage = 1;
    this.hasMoreData = true;
    this.loadPage(this.currentPage);
  }

  constructor(private invoiceService: InvoiceService) { }
  dataSource: any[] = [];
  pageSize = 20;
  currentPage = 1;
  loading = false;
  hasMoreData = true;
  filters: any = {};

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    if (!this.hasMoreData) return;


    console.warn('loadPageloadPageloadPageloadPage');
    this.loading = true;
    console.warn(this.filters);

    setTimeout(() => {
      this.invoiceService.getInvoices(page, this.pageSize, this.filters).subscribe(data => {
        const newData = data;

        if (newData.length < this.pageSize) {
          this.hasMoreData = false;
        }
        this.dataSource = [...this.dataSource, ...newData];
        this.currentPage++;
        this.loading = false;
      });
    }, 300);
  }

  onScroll(event: any) {
    const { scrollTop, offsetHeight, scrollHeight } = event.target;

    if (scrollHeight - scrollTop <= offsetHeight + 700 && !this.loading) {

      this.loadPage(this.currentPage);
    }
  }


  getPaymentsStatus(element: Invoice) {
    const totalPayments = Math.ceil(element.total / element.amount);
    const paymentsMade = Math.floor((element.paid + element.amount) / element.amount);
    return `${paymentsMade}/${totalPayments}`;
  }

  onRowClick(row: any, rows: any[]) {
    const val = !row.selected;
    rows.forEach(row => row.selected = false)
    row.selected = val;
    this.selectedRow.emit(rows.filter(row => row.selected))
  }
}
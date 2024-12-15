import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-invoice-filters',
  templateUrl: './invoice-filters.component.html',
  styleUrls: ['./invoice-filters.component.scss']
})
export class InvoiceFiltersComponent {

  @Output() filterChange = new EventEmitter<any>();

  value: string = '';
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  statusCountInvoices: { status: string, count: number }[] = 
  [{status:'ממתין לאישור', count: 8},
    {status:'בתהליך', count: 8},
    {status:'נדרש', count: 8},
    {status:'בוטל', count: 8},
    {status:'הכל', count: 8},
  ];

  private searchSubject = new Subject<string>();

  constructor() {
    // Debounce for the search input
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchValue) => {
        this.emitFilterChanges();
      });

    // Listen to date range changes
    this.range.valueChanges.subscribe(() => {
      this.emitFilterChanges();
    });
  }

  onSearchInput(value: string): void {
    this.searchSubject.next(value);
  }

  emitFilterChanges(): void {
    const filters = {
      search: this.value,
      dateRange: this.range.value,
    };

    this.filterChange.emit(filters);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './invoice.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getInvoices(page: number, pageSize: number, filters: any = {}): Observable<Invoice[]> {

    let params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);

    if (filters.search) {
      params = params.set('textSearch', filters.search);
    }
    if (filters.dateRange?.start) {
      params = params.set('startDate', filters.dateRange?.start);
    }
    if (filters.dateRange?.end) {
      params = params.set('endDate', filters.dateRange?.end);
    }

    return this.http.get<Invoice[]>(`${environment.apiUrl}/invoices`, { params });
  }
}

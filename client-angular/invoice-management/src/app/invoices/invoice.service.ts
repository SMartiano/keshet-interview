import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/invoices';  // כתובת ה-API של החשבוניות

  constructor(private http: HttpClient) {}

  // פונקציה להחזרת נתוני החשבוניות עם אפשרות לפילטרים ופאגינציה
  getInvoices(page: number = 1, pageSize: number = 20, filters: any = {}): Observable<Invoice[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    // הוספת פילטרים אם קיימים
    if (filters.invoiceName) {
      params = params.set('invoiceName', filters.invoiceName);
    }
    if (filters.supplierName) {
      params = params.set('supplierName', filters.supplierName);
    }
    if (filters.startDate) {
      params = params.set('startDate', filters.startDate);
    }
    if (filters.endDate) {
      params = params.set('endDate', filters.endDate);
    }

    // שליחה ל-API עם הפילטרים והפאגינציה
    return this.http.get<Invoice[]>(this.apiUrl, { params });
  }

  // פונקציה לקבלת חשבונית לפי מזהה (לשימוש בעת הצגת חשבונית ספציפית)
  getInvoiceById(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}/${id}`);
  }
}

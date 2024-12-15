import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispayPdfService {

  constructor(private http: HttpClient) { }

  getArrayBufferPdf(url: string) {
    return this.http.get(url, { responseType: 'arraybuffer' })
  }
}

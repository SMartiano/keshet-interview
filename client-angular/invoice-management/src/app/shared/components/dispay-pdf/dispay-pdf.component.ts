import { Component, OnInit, Input } from '@angular/core';
import { DispayPdfService } from './dispay-pdf.service';

@Component({
  selector: 'app-dispay-pdf',
  templateUrl: './dispay-pdf.component.html',
  styleUrls: ['./dispay-pdf.component.scss']
})
export class DispayPdfComponent implements OnInit {
  filePdf: string = '';
  pdfUrl: string = '';
  @Input() set PdfUrl(value: string) {
    if (value != '') {
      this.pdfUrl = value;
      this.loadPdf();
    }
  }

  constructor(private dispayPdfService: DispayPdfService) { }

  ngOnInit(): void {

  }

  loadPdf() {
    this.dispayPdfService.getArrayBufferPdf(this.pdfUrl).subscribe((pdf) => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      this.filePdf = URL.createObjectURL(blob);
    });
  }
}

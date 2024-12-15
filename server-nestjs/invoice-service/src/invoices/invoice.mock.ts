import { Invoice } from "./invoice.model";
import { INVOICE_STATUSES, DEFAULT_PDF_URL } from "./invoice.constants";

// This array generates 400 mock invoices for testing purposes.
// Each invoice includes details like supplier, date, status, and a PDF URL.

export const MOCK_INVOICES: Invoice[] = Array.from({ length: 400 }, (_, index) => {
  const id = (index + 1).toString();
  const supplierName = `Supplier ${index % 10}`;
  const date = `2024-${(index % 12) + 1}-${(index % 28) + 1}`;
  const amount = Math.floor(Math.random() * 1000) + 100;
  const total = Math.floor(amount + Math.random() * 500);
  const paid = Math.min(amount, total);

  const status = INVOICE_STATUSES[index % INVOICE_STATUSES.length];
  const invoiceName = `Invoice ${id.padStart(3, '0')}`;
  
  return {
    id,
    supplierName,
    date,
    amount,
    total,
    paid,
    status,
    invoiceName,
    pdfUrl: DEFAULT_PDF_URL
  };
});

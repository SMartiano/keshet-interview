import { Invoice } from "./invoice.model";

export const MOCK_INVOICES: Invoice[] = Array.from({ length: 400 }, (_, index) => {
  const id = (index + 1).toString();
  const supplierName = `Supplier ${index % 10}`;
  const date = `2024-${(index % 12) + 1}-${(index % 28) + 1}`;
  const amount = Math.floor(Math.random() * 1000) + 100;
  const total = Math.floor(amount + Math.random() * 500);
  const paid = Math.min(amount, total);
  const statuses = ['approved', 'pending', 'rejected'];
  const status = statuses[index % statuses.length];
  const invoiceName = `Invoice ${id.padStart(3, '0')}`;
  const pdfUrl = 'https://staging.safegold.com/display/sales-invoice/da771e90-aa8f-4147-bc7c-805b73bb1283';
  
  return {
    id,
    supplierName,
    date,
    amount,
    total,
    paid,
    status,
    invoiceName,
    pdfUrl
  };
});

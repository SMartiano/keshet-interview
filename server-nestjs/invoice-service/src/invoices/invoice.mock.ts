// invoices.mock.ts
import { Invoice } from './invoice.model';

export const MOCK_INVOICES: Invoice[] = [
  {
    id: '1',
    supplierName: 'Acme Corp',
    date: '2024-01-01',
    amount: 150.5,
    status: 'Paid',
    invoiceName: 'Invoice 001',
  },
  {
    id: '2',
    supplierName: 'Beta Ltd',
    date: '2024-02-15',
    amount: 200.75,
    status: 'Pending',
    invoiceName: 'Invoice 002',
  },
  {
    id: '3',
    supplierName: 'Gamma Inc',
    date: '2024-03-10',
    amount: 300.0,
    status: 'Overdue',
    invoiceName: 'Invoice 003',
  },
  {
    id: '4',
    supplierName: 'Delta Co',
    date: '2024-04-20',
    amount: 450.25,
    status: 'Paid',
    invoiceName: 'Invoice 004',
  },
];

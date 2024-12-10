import { Injectable } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { MOCK_INVOICES } from './invoice.mock';

@Injectable()
export class InvoicesService {
    getInvoices(
        page: number = 1,
        pageSize: number = 20,
        filters: { invoiceName?: string; startDate?: string; endDate?: string; supplierName?: string } = {},
    ): Invoice[] {
        let filteredInvoices = MOCK_INVOICES;

        if (filters.invoiceName) {
            filteredInvoices = filteredInvoices.filter(invoice =>
                invoice.invoiceName.toLowerCase().includes(filters.invoiceName.toLowerCase())
            );
        }

        if (filters.supplierName) {
            filteredInvoices = filteredInvoices.filter(invoice =>
                invoice.supplierName.toLowerCase().includes(filters.supplierName.toLowerCase())
            );
        }

        if (filters?.startDate && filters?.endDate) {
            filteredInvoices = filteredInvoices.filter(invoice =>
                new Date(invoice.date) >= new Date(filters.startDate) &&
                new Date(invoice.date) <= new Date(filters.endDate)
            );
        }

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        return filteredInvoices.slice(startIndex, endIndex);
    }
}
import { Injectable } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { MOCK_INVOICES } from './invoice.mock';

@Injectable()
export class InvoicesService {

    getInvoices(
        page: number,
        pageSize: number,
        filters: { startDate?: string; endDate?: string; textSearch?: string } = {},
    ): Invoice[] {
        let filteredInvoices = MOCK_INVOICES;

        // filter by text search
        if (filters.textSearch) {
            filteredInvoices = filteredInvoices.filter(invoice =>
                invoice.invoiceName.toLowerCase().includes(filters.textSearch.toLowerCase()) ||
                invoice.supplierName.toLowerCase().includes(filters.textSearch.toLowerCase())
            );
        }

        // filter by date-range
        if (filters?.startDate && filters?.endDate) {
            filteredInvoices = filteredInvoices.filter(invoice =>
                new Date(invoice.date) >= new Date(filters.startDate) &&
                new Date(invoice.date) <= new Date(filters.endDate)
            );
        }

        // filter by scrolling area
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredInvoices.slice(startIndex, endIndex);
    }
}
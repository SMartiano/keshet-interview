import { Controller, Get, Query, Param, Post } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { InvoicesService } from './invoices.service';
import { MOCK_INVOICES } from './invoice.mock';

@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) { }

    @Get()
    getInvoices(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 20,
        @Query('invoiceName') invoiceName?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('supplierName') supplierName?: string,
    ): Invoice[] {
        const filter = {
            invoiceName,
            startDate,
            endDate,
            supplierName,
        };

        return this.invoicesService.getInvoices(page, pageSize, filter);
    }

    @Post('get-invoice-template')
    getInvoiceTemplate(@Param('id') id: string) {
        const invoice = MOCK_INVOICES.find((invoice) => invoice.id === id);
        if (!invoice) {
            throw new Error('Invoice not found');
        }
        return {
            content: `Invoice ID: ${invoice.id}\nSupplier: ${invoice.supplierName}\nAmount: $${invoice.amount}`,
        };
    }
}
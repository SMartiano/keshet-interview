import { Controller, Get, Query, Param, Post, ParseIntPipe } from '@nestjs/common';
import { Invoice } from './invoice.model';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) { }

    @Get()
    getInvoices(
        @Query('page', ParseIntPipe) page: number = 1,
        @Query('pageSize', ParseIntPipe) pageSize: number = 20,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('textSearch') textSearch?: string,
    ): Invoice[] {
        const filter = {
            startDate,
            endDate,
            textSearch,
        };

        return this.invoicesService.getInvoices(page, pageSize, filter);
    }
}
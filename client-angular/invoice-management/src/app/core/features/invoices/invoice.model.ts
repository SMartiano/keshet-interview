export interface Invoice {
    id: string;
    invoiceName: string;
    supplierName: string;
    date: string;
    amount: number;
    total: number;
    paid: number;
    status: string;
    pdfUrl: string;
}
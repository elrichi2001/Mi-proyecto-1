import {Injectable} from "@angular/core";
import {INVOICE} from "../mock/invoice-mock";
import {Invoice} from "../model/invoice";

@Injectable()
export class InvoiceService{
    getInvoices(): Promise<Invoice[]>{
        return Promise.resolve(INVOICE);
    }

    getInvoice(id: number): Promise<Invoice> {
        return this.getInvoices()
            .then(invoice => invoice.find(invoice => invoice.id === id));
    }
}
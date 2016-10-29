import {Component, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service'
import {Router} from "@angular/router";

@Component({
    selector: 'customer-list-app',
    templateUrl: 'app/templates/customer-list.html',
    providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

    title: string = "****  CLIENTES   ****";
    selected: Customer;
    customers: Customer[];
    constructor(private router: Router, private CustomerService: CustomerService) {}

    getCustomers() {
        this.CustomerService.getCustomers().then(customers => this.customers = customers);
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    onSelect(customer: Customer){
        this.selected = customer;
    }

    gotoDetail(): void {
        this.router.navigate(['customer/detail/', this.selected.id]);
    }

}
import {Component, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'user-detail-app',
    templateUrl: 'app/templates/user-detail.html',
    providers: [CustomerService]
})

export class CustomerDetailComponent implements OnInit {

    user: Customer;
    constructor(
        private customerService: CustomerService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.customerService.getCustomer(id)
                .then(user => this.user = user);
        });
    }
}

import {Component, OnInit} from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
    title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private router: Router, private productService: ProductService) {

    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }

    gotoDetail(): void {
        this.router.navigate(['product/detail/', this.selected.id]);
    }
}

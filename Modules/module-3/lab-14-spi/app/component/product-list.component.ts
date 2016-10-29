import {Component, OnInit} from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service'

@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {

	constructor(private productService: ProductService){}
    title: string = "Lista de productos";
    products: Product[];

    ngOnInit(){
		this.productService.getProducts()
		.then(products => this.products = products)
		.catch(error => console.log(error));
	}

}
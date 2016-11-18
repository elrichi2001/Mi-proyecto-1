import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../../model/product';
import { ProductService } from '../../providers/product.service';



/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

 

export class ListPage {

	selected: Product;
	products: Product[];

 	constructor(public navCtrl: NavController, private productService: ProductService) {}

	ionViewDidLoad() {
	console.log('Hello ListPage Page');
	this.getProducts();
	}

	getProducts() {
	    this.productService.getProducts().then(products => this.products = products);
	}

	/*
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
	*/
  
}

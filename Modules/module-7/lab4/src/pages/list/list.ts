import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product }  from '../providers/productService';
import { ProductService }  from '../providers/productService';


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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
  }

  products: Products[] =;
  xxxxxxxxxxxxx
}

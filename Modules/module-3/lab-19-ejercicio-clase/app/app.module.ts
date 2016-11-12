import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "./mock/in-memory-product.service";
//import {AboutComponent} from "./component/about.component";
import {ProductsListComponent} from "./component/product-list.component";
import {HomeComponent} from "./component/home.component";
import {APP_BASE_HREF} from "@angular/common";
import {UserComponent} from "./component/user.component";
//import {SalesInvoiceComponent} from "./component/sales-invoice.component";
//import {SalesInvoiceCustomerDetailComponent} from "./component/sales-invoice-detail-customer.component";/

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      ProductsListComponent,
      HomeComponent,
      UserComponent,
      //SalesInvoiceComponent,
      //SalesInvoiceCustomerDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }

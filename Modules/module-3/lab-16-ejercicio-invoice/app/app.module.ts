import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {HomeComponent} from "./component/home.component";
import {ProductListComponent} from "./component/product-list.component";
import {CustomerListComponent} from "./component/customer-list.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ProductListComponent,
      CustomerListComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { PageOneComponent } from './component/page-one.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {AboutComponent} from "./component/about.component";
import {PageTwoComponent} from "./component/page-two.component";
import {ProductListComponent} from "./component/product-list.component";
import {UserListComponent} from "./component/user-list.component";
import {HomeComponent} from "./component/home.component";
import {ProductDetailComponent} from "./component/product-detail.component";
import {UserDetailComponent} from "./component/user-detail.component";

import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      PageOneComponent,
      PageTwoComponent,
      HomeComponent,
      AboutComponent,
      ProductListComponent,
      UserListComponent,
      ProductDetailComponent,
      UserDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
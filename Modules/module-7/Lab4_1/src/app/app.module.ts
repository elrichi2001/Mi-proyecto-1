import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPage2 } from '../pages/list2/list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	  ListPage2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	ListPage2
  ],
  providers: []
})
export class AppModule {}

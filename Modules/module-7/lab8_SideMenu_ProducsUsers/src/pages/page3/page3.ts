import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { UserService } from '../../providers/user.service'

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
	selectedItem: any;
	icons: string[];
	items: Array<{title: string, note: string, icon: string}>;
	selected: User;
	users: User[];

  constructor(public navCtrl: NavController,  public navParams: NavParams, private userService: UserService) {
  	this.selectedItem = navParams.get('item');
  }

  getUsers(){
  	this.userService.getUsers()
  		.subscribe(
  			users => {
  				this.users = users;
  			},
  			error => {
  				console.log(error);
  			});
  }

  ngOnInit():void{
      this.getUsers();
    }

    itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item
    });
  }

}

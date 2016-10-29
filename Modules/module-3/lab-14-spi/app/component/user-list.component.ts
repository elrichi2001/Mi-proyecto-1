import {Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service'

@Component({
    selector: 'user-list-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {

	constructor(private userService: UserService){}
    title: string = "Lista de Usuarios";
    users: User[];

    ngOnInit(){
		this.userService.getUsers()
		.then(users => this.users = users)
		.catch(error => console.log(error));
	}

}
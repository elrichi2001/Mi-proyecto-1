import {Component} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
    selector: 'user-app',
    templateUrl: 'app/templates/user.html',
    providers: [UserService]
})

export class UserComponent {
    title: string = 'Clientes';
    users: User[];

    constructor(private userService: UserService){}

    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit(){
        this.getUsers();
    }
}

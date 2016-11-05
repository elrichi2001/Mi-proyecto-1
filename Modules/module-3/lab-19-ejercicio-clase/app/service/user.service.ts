import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {USERS} from "../mock/user-mock";

@Injectable()
export class UserService{
    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    }

    getProduct(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }
}
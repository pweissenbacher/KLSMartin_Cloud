import { Injectable } from '@angular/core';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: User;
  constructor() {
    this.loggedInUser = this.getLoggedInUser();
  }

  public getLoggedInUser() {
    return this.loggedInUser;
  }

  public setLoggedInUser(user: User) {
    this.loggedInUser = user;
    console.log(this.loggedInUser);
  }


}

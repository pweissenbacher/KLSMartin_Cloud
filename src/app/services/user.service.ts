import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUserSource = new BehaviorSubject<User>(new User());
  public loggedInUserObservable = this.loggedInUserSource.asObservable();
  private loggedInUser: User;
  constructor() {
    this.loggedInUser = this.getLoggedInUser();
  }

  public getLoggedInUser() {
    return this.loggedInUser;
  }

  public setLoggedInUser(user: User) {
    this.loggedInUserSource.next(user);
    this.loggedInUser = user;
    console.log(this.loggedInUser);
  }


}

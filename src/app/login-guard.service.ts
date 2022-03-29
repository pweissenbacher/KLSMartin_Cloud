import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private userService: UserService) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.userService.getLoggedInUser());
    if(this.userService.getLoggedInUser()!=null) {
      window.open('/dashboard', '_self');
      return true;
    }
    window.open('/login', '_self');
    return false;
  }

}

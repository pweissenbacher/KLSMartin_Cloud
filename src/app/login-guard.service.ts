import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private userService: UserService,
              private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.userService.getLoggedInUser());

    if(this.userService.getLoggedInUser() != null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}

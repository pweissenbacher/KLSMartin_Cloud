import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router} from "@angular/router";
import {BackgroundComponent} from "../background/background.component";

export class User {
  public name: string = '';
  public email: string = '';
  public password: string = '';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public currentEmail: string = "";
  public currentPassword: string = "";

  user: User[] = [
    {name: 'Lena', email: '20181056@students.htl-perg.ac.at', password: 'asdf!jklöl1'},
    {name: 'Herbert', email: 'herbert.huber@gmail.com', password: 'JavaIstToll123!'},
    {name: 'Manuel', email: 'rainer.maunel@outlook.com', password: 'AnuglarNichtAngola?'}
  ]

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  hide = true;

  public login() {
    /*const user = {
      email: "asdf@gmx.at",
      password: "Password1"
    } ;*/
    for(var tmpUser of this.user){
      if( this.currentEmail === tmpUser.email && this.currentPassword === tmpUser.password) {
        //Wie User Name am Dashboard anzeigen? - User in backgroundcomponente?
        this.userService.setLoggedInUser(tmpUser);
        this.router.navigate(['dashboard']);
        return;
      } else {
        continue;
      }
    }
    alert("Invalid Login!");



  }
}


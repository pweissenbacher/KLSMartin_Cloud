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
  public applicationIDs: string[] = [];
}

export class Application {
  public id: string = '';
  public name: string = '';
  public imgpath: string = '';
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
    {name: 'Lena', email: '20181056@students.htl-perg.ac.at', password: 'asdf!jklöl1', applicationIDs: ['1', '2', '3', '4', '5', '6', '7']},
    {name: 'Herbert', email: 'herbert.huber@gmail.com', password: 'JavaIstToll123!', applicationIDs: ['1', '2', '3', '4']},
    {name: 'Manuel', email: 'rainer.maunel@outlook.com', password: 'AnuglarNichtAngola?', applicationIDs: ['1', '2', '4', '5']},
    {name: 'a', email: 'a@a', password: 'abc', applicationIDs: ['1', '2', '4', '5']}
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


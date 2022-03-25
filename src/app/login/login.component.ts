import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

export interface User {
  email: string;
  password: string;
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
    {email: '20181056@students.htl-perg.ac.at', password: 'asdf!jklöl1'},
    {email: 'herbert.huber@gmail.com', password: 'JavaIstToll123!'},
    {email: 'rainer.maunel@outlook.com', password: 'AnuglarNichtAngola?'}
  ]

  constructor() { }

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
        console.log(true);

        window.open('/dashboard', '_self');    }
      else {
        console.log(false);
      }
    }

    

  }
}


import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
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
    {name: 'Lena', email: '20181056@students.htl-perg.ac.at', password: 'asdf!jklöl1'},
    {name: 'Herbert', email: 'herbert.huber@gmail.com', password: 'JavaIstToll123!'},
    {name: 'Manuel', email: 'rainer.maunel@outlook.com', password: 'AnuglarNichtAngola?'}
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
        //Wie User Name am Dashboard anzeigen? - User in backgroundcomponente?
        console.log(true);

        window.open('/dashboard', '_self');    }
      else {
        console.log(false);
      }
    }

    

  }
}


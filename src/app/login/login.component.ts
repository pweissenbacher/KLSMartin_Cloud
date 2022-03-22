import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public currentEmail: string = "";
  public currentPassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;

  public login() {
    const user = {
      email: "asdf@gmx.at",
      password: "Password1"
    } ;

    if( this.currentEmail === user.email && this.currentPassword === user.password)
    {
      console.log(true);

      window.open('/dashboard', '_self');    }
    else {
      console.log(false);
    }

  }
}


import { NgForOf } from '@angular/common';
import { Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import { ApplogicService } from '../services/applogic.service';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public searchApplicationName: string = "";

  @Output() output = new EventEmitter<string>();

  user: User[] = [
    {name: 'Lena', email: '20181056@students.htl-perg.ac.at', password: 'asdf!jklöl1', applicationIDs: ['1', '2', '3', '4', '5', '6', '7']},
    {name: 'Herbert', email: 'herbert.huber@gmail.com', password: 'JavaIstToll123!', applicationIDs: ['1', '2', '3', '4']},
    {name: 'Manuel', email: 'rainer.maunel@outlook.com', password: 'AnuglarNichtAngola?', applicationIDs: ['1', '2', '4', '5']},
    {name: 'a', email: 'a@a', password: 'abc', applicationIDs: ['1', '2', '4', '5']}
  ]

  constructor(private userService: UserService, private applogic: ApplogicService) { 
  }

  ngOnInit(): void {
  }

  public logout(){
   // window.open(document.URL, 'app-login', 'location=yes,height=device-height,width=device-width,scrollbars=yes,status=yes');
    window.open('/login', '_self');
  }

 /*

 public login() {
    const user = {
      email: "asdf@gmx.at",
      password: "Password1"
    } ;
    

    for(var tmpUser of this.user){
      if(this.currentEmail === tmpUser.email && this.currentPassword === tmpUser.password) {
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
  ******************* */

  //--> Background
  public searchApplikationSearchBar(){
    /*
    const user = this.userService.getLoggedInUser();
    const applications = this.applogic.getApplications();
    
    for (let i = 0; i < applications.length; i++) {
      if(applications[Number(user.applicationIDs[i])].name.includes(this.searchApplicationName)){
        console.log('Name: ' + applications[Number(user.applicationIDs[i])].name + 
                    ' ID: ' + applications[Number(user.applicationIDs[i])].id + 
                    ' ImgPath: ' + applications[Number(user.applicationIDs[i])].imgpath);
      }
    }
    */
   
   this.output.emit(this.searchApplicationName);
  }
}

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


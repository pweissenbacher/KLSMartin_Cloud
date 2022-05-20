import { Component, OnInit } from '@angular/core';
import { Application, User } from '../login/login.component';
import { ApplicationsService } from '../services/applications.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})

//Minus bei vorhandenen Applications??
export class ApplicationListComponent implements OnInit {

  private user: User;
  
  applications: Application[];
  constructor(private applicatonsService: ApplicationsService, private userService: UserService) {
    this.applications = applicatonsService.getApplications();
    this.user = userService.getLoggedInUser();
   }
  ngOnInit(): void {
  }

  addApplication(id :string) {
    for(let tmpAppID of this.user.applicationIDs) {
      if(tmpAppID===id) {
        alert('Application already in User Array');
        return;
      }
    }
    for(let app of this.applications) {
      if(id==app.id) {
        this.user.applicationIDs.push(id);
      }
    }
    this.userService.setLoggedInUser(this.user);
  }
}

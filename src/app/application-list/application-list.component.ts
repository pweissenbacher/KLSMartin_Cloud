import { Component, OnInit } from '@angular/core';
import { Application } from '../login/login.component';
import { ApplicationsService } from '../services/applications.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})

//Minus bei vorhandenen Applications??
export class ApplicationListComponent implements OnInit {
  
  applications: Application[];
  constructor(private applicatonsService: ApplicationsService) {
    this.applications = applicatonsService.getApplications();
   }
  ngOnInit(): void {
  }

}

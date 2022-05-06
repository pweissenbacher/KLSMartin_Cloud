import { Component, OnInit } from '@angular/core';
import { Application, User } from '../login/login.component';
import { UserService } from '../services/user.service';
import { ApplicationsService } from '../services/applications.service';

export class Tile {
  application: Application = new Application();
  cols: number = 1;
  rows: number = 1;
}
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  user: User;
  username: string;
  applications: Application[];

  constructor(private userService: UserService, private applicationsService: ApplicationsService) {
    console.log(userService.getLoggedInUser());
    this.user = userService.getLoggedInUser();
    this.username = userService.getLoggedInUser().name;
    this.applications = applicationsService.getApplications();
  }
  ngOnInit(): void {
    this.initializeTiles();
  }

  tiles: Tile[] = [
    /*{application: this.applications[0], cols: 1, rows: 1},
    {application: this.applications[1], cols: 1, rows: 1},
    {application: this.applications[2], cols: 1, rows: 1},
    {application: this.applications[0], cols: 1, rows: 1},
    {application: this.applications[1], cols: 1, rows: 1},
    {application: this.applications[2], cols: 1, rows: 1},
    {application: this.applications[0], cols: 1, rows: 1},
    {application: this.applications[1], cols: 1, rows: 1},
    {application: this.applications[2], cols: 1, rows: 1},
    {application: this.applications[0], cols: 1, rows: 1},
    {application: this.applications[1], cols: 1, rows: 1},
    {application: this.applications[1], cols: 1, rows: 1},
    {application: this.applications[2], cols: 1, rows: 1},
    {application: this.applications[0], cols: 1, rows: 1}*/
  ];

  

  public initializeTiles() {
    for(var app of this.applications){
      for(var appID of this.user.applicationIDs) {
        if(app.id==appID) {
          let newTile = new Tile();
          newTile.application = app;
          newTile.cols = 1;
          newTile.rows = 1;
          this.tiles.push(newTile);
        }
        
      }
      
    }
  }
  
}



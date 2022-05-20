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
  user = new User();
  username: string = "";
  success: boolean;
  applications: Application[];

  constructor(private userService: UserService, private applicationsService: ApplicationsService) {
    console.log(userService.getLoggedInUser());
    this.success = false;
    this.applications = applicationsService.getApplications();
  }
  ngOnInit(): void {
    this.userService.loggedInUserObservable.subscribe((user: User) => {
      this.user = user;
      this.username = this.userService.getLoggedInUser().name;
      this.initializeTiles();
      this.imageWhenEmpty();
    });
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
          this.success=true;
        }
        
      }
      
    }
  }
 public imageWhenEmpty(){
   if(!this.success){
      let newTile = new Tile();
      newTile.cols = 5;
      newTile.rows = 5;
      newTile.application.imgpath = 'assets\\Images\\icon_plus.png';
      newTile.application.id = '0';
      newTile.application.name = 'No Apllication Yet';
      this.tiles.push(newTile);
   }
 }
}



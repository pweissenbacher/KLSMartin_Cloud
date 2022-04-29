import { Component, OnInit } from '@angular/core';
import { Application, User } from '../login/login.component';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService) {
    console.log(userService.getLoggedInUser());
    this.user = userService.getLoggedInUser();
    this.username = userService.getLoggedInUser().name;

  }
  ngOnInit(): void {
    this.initializeTiles();
  }

  applications: Application[] = [
    {id: '1', name: 'IPS Gate', imgpath: 'assets\\Images\\question_mark.png'},
    {id: '2', name: 'IPS Automation Module', imgpath: 'assets\\Images\\IPSAutomation.png'},
    {id: '3', name: 'IPS Orthognathic Module', imgpath: 'assets\\Images\\IPSOrthognathic.png'},
    {id: '4', name: 'IPS Reconstruction Module', imgpath: 'assets\\Images\\question_mark.png'},
    {id: '5', name: 'IPS Review Module', imgpath: 'assets\\Images\\question_mark.png'},
    {id: '6', name: 'IPS Mission Control', imgpath: 'assets\\Images\\IPSMission.png'},
    {id: '7', name: 'Log Gate', imgpath: 'assets\\Images\\IPSLogGate.png'}
  ]

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



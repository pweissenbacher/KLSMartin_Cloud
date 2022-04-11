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
    {id: '1', name: 'Roo', imgpath: 'assets\\Images\\roo.png'},
    {id: '2', name: 'Tiger', imgpath: 'assets\\Images\\tiger.png'},
    {id: '3', name: 'Poh', imgpath: 'assets\\Images\\poh.png'},
    {id: '4', name: 'Eyyore', imgpath: 'assets\\Images\\eyyore.png'},
    {id: '5', name: 'Piglet', imgpath: 'assets\\Images\\piglet.png'},
    {id: '6', name: 'Junge', imgpath: 'assets\\Images\\junge.png'},
    {id: '7', name: 'Honig', imgpath: 'assets\\Images\\honig.png'}
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
      //console.log('in 1ter for');
      for(var appID of this.user.applicationIDs) {
        //console.log('in 2ter for');
        if(app.id==appID) {
          //console.log('im If');
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



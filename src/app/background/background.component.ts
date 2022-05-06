import { Component, OnDestroy, OnInit } from '@angular/core';
import { Application, User } from '../login/login.component';
import { ApplogicService } from '../services/applogic.service';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

export class Tile {
  application: Application = new Application();
  cols: number = 1;
  rows: number = 1;
}
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
               //'<app-header []="headerProperty"></app-header>',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnDestroy {
  user: User;
  username: string;

  searchApplicationSubscription: Subscription;  

  constructor(private userService: UserService, private applogic: ApplogicService) {
    console.log(userService.getLoggedInUser());
    
    this.user = userService.getLoggedInUser();
    this.username = userService.getLoggedInUser().name;

    this.searchApplicationSubscription = this.applogic.getInputInsertetEvent().subscribe((value: string) =>{
      console.log(value);
      this.initializeTiles(value);
    })
  }

  ngOnInit(): void {
    this.initializeTiles();
  }

  ngOnDestroy(): void {
    this.searchApplicationSubscription.unsubscribe();
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

  tilesSearched: Tile[] = [
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

  public initializeTiles(value: string = '') {
    if(value == ''){
      this.tiles = [];
      
      for(var app of this.applogic.getApplications()){
        for(var appID of this.user.applicationIDs) {   
          if(app.id == appID) {
            let newTile = new Tile();
            newTile.application = app;
            newTile.cols = 1;
            newTile.rows = 1;
            this.tiles.push(newTile);
          }
        } 
      }
    }else{
      const user = this.userService.getLoggedInUser();
      const applicationsT = this.applogic.getApplications();
      this.tiles = [];

      for (let i = 0; i < this.user.applicationIDs.length; i++) {
        if(applicationsT[Number(user.applicationIDs[i])].name.includes(value)){  
          let newTile = new Tile();
          newTile.application = applicationsT[Number(this.user.applicationIDs[i])];
          newTile.cols = 1;
          newTile.rows = 1;
          this.tilesSearched.push(newTile);
        }
      }
      
      this.tiles = this.tilesSearched;
      this.tilesSearched = [];
    }
  }

  public initializeSearchedTiles(value: string)  {
    const user = this.userService.getLoggedInUser();
    const applications = this.applogic.getApplications();
    
    for (let i = 0; i < user.applicationIDs[i].length; i++) {
      console.log(applications[Number(user.applicationIDs[i])].name + " & " + value);
      //if(value == '')
      if(applications[Number(user.applicationIDs[i])].name.includes(value)){
        console.log(i);
        console.log('Name: ' + applications[Number(user.applicationIDs[i])].name + 
                    ' ID: ' + applications[Number(user.applicationIDs[i])].id + 
                    ' ImgPath: ' + applications[Number(user.applicationIDs[i])].imgpath);

          let newTile = new Tile();
          newTile.application = applications[Number(user.applicationIDs[i])];
          newTile.cols = 1;
          newTile.rows = 1;
          this.tilesSearched.push(newTile);
      }
    }
  }


  
}




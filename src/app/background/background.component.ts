import { Component, OnDestroy, OnInit } from '@angular/core';
import { Application, User } from '../login/login.component';
import { ApplogicService } from '../services/applogic.service';
import { UserService } from '../services/user.service';
import { ApplicationsService } from '../services/applications.service';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { trigger } from '@angular/animations';
//import { stringify } from 'querystring';
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


  user = new User();
  username: string = "";
  success: boolean = false;
  applications: Application[];
  @ViewChild(MatMenuTrigger)trigger!: MatMenuTrigger;
  menuTopLeftPosition = {x: 0, y: 0};

    
  

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
    this.userService.loggedInUserObservable.subscribe((user: User) => {
      this.user = user;
      this.username = this.userService.getLoggedInUser().name;
      this.initializeTiles();
      this.imageWhenEmpty();
    });
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
  public onRightClick(event: MouseEvent, name: String) {
    event.preventDefault();
    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;
    console.log(this.menuTopLeftPosition.x)
    this.trigger.menuData = {item: {content: 'Delete', id: name}};
    this.trigger.openMenu();
  }

  public deleteApplication(id: string){
    for(let tmpAppID of this.user.applicationIDs) {
      if(tmpAppID===id) {
        this.user.applicationIDs[this.user.applicationIDs.indexOf(tmpAppID)]=this.user.applicationIDs[this.user.applicationIDs.length-1];
        this.user.applicationIDs[this.user.applicationIDs.length-1]=id;
        this.user.applicationIDs.pop();
      }
    }
    if(this.user.applicationIDs.length<=0) {
      this.success = false;
    }
    this.userService.setLoggedInUser(this.user);
  }
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { Application, User } from '../login/login.component';
import { UserService } from '../services/user.service';
import { ApplicationsService } from '../services/applications.service';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { trigger } from '@angular/animations';
import { ApplogicService } from '../services/applogic.service';
import { Subscription } from 'rxjs';
//import { stringify } from 'querystring';


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
  @ViewChild(MatMenuTrigger)trigger!: MatMenuTrigger;
  menuTopLeftPosition = {x: 0, y: 0};

    
  
  searchApplicationSubscription: Subscription;
  constructor(private userService: UserService, private applicationsService: ApplicationsService, private applogic: ApplogicService) {
    console.log(userService.getLoggedInUser());
    this.success = false;
    this.applications = applicationsService.getApplications();
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
  tilesSearched: Tile[] = [];
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
              this.success=true;
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
      newTile.application.imgpath = 'assets\\Images\\placeholder_icon_plus.svg';
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
      console.log(tmpAppID + ": " + id);
      if(tmpAppID===id) {
        console.log(id + ": " + this.user.applicationIDs.indexOf(tmpAppID));
        this.user.applicationIDs[this.user.applicationIDs.indexOf(tmpAppID)]=this.user.applicationIDs[this.user.applicationIDs.length-1];
        this.user.applicationIDs[this.user.applicationIDs.length-1]=id;
        this.user.applicationIDs.pop();
      }
    }
    if(this.user.applicationIDs.length<=0) {
      this.success = false;
    }
    console.log(this.user.applicationIDs)
    this.userService.setLoggedInUser(this.user);
  }
}


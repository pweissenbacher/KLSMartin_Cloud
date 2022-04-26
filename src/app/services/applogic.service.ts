import { Injectable } from '@angular/core';
import { Application } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApplogicService {

  constructor() { }

  applications: Application[] = [
    {id: '1', name: 'Roo', imgpath: 'assets\\Images\\roo.png'},
    {id: '2', name: 'Tiger', imgpath: 'assets\\Images\\tiger.png'},
    {id: '3', name: 'Poh', imgpath: 'assets\\Images\\poh.png'},
    {id: '4', name: 'Eyyore', imgpath: 'assets\\Images\\eyyore.png'},
    {id: '5', name: 'Piglet', imgpath: 'assets\\Images\\piglet.png'},
    {id: '6', name: 'Junge', imgpath: 'assets\\Images\\junge.png'},
    {id: '7', name: 'Honig', imgpath: 'assets\\Images\\honig.png'}
  ]

  public getApplications(){
    return this.applications;
  }
}



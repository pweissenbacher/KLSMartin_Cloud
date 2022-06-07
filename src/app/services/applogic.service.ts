import { Injectable } from '@angular/core';
import { Application } from '../login/login.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplogicService {
  constructor() { }

  private subject = new Subject<string>();

  sendStartSearchFunction(value: string){
    this.subject.next(value);
  }

  getInputInsertetEvent():Observable<string>{
    return this.subject.asObservable();
  }

  applications: Application[] = [
    {id: '0', name: 'Roo', imgpath: 'assets\\Images\\roo.png'},
    {id: '1', name: 'Tiger', imgpath: 'assets\\Images\\tiger.png'},
    {id: '2', name: 'Poh', imgpath: 'assets\\Images\\poh.png'},
    {id: '3', name: 'Eyyore', imgpath: 'assets\\Images\\eyyore.png'},
    {id: '4', name: 'Piglet', imgpath: 'assets\\Images\\piglet.png'},
    {id: '5', name: 'Junge', imgpath: 'assets\\Images\\junge.png'},
    {id: '6', name: 'Honig', imgpath: 'assets\\Images\\honig.png'}
  ]

  public getApplications(){
    return this.applications;
  }


}



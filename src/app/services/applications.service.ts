import { Injectable } from '@angular/core';
import { Application } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private applications: Application[] = [
    {id: '1', name: 'IPS Gate', imgpath: 'assets\\Images\\IPS_Gate.png'},
    {id: '2', name: 'IPS Automation Module', imgpath: 'assets\\Images\\IPS Automation Module.png'},
    {id: '3', name: 'IPS Orthognathic Module', imgpath: 'assets\\Images\\IPS Orthognathic Module.png'},
    {id: '4', name: 'IPS Reconstruction Module', imgpath: 'assets\\Images\\IPS Reconstruction Module.png'},
    {id: '5', name: 'IPS Review Module', imgpath: 'assets\\Images\\IPS Review Module.png'},
    {id: '6', name: 'IPS Mission Control', imgpath: 'assets\\Images\\IPS Mission Control.png'},
    {id: '7', name: 'Log Gate', imgpath: 'assets\\Images\\Log Gate.png'}
  ]
  constructor() { }

  public getApplications() {
    return this.applications;
  }
  
}




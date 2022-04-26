import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public searchApplicationName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public outputMain(searchApplicationNameInput: string){
    this.searchApplicationName = searchApplicationNameInput;
  }
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import {Component} from '@angular/core';

export interface Tile {
  imgpath: string;
  cols: number;
  rows: number;
  text: string;
}

 @Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Two', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Three', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Four', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Five', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'}
  ];
}

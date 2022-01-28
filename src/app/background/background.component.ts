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
    {text: 'Five', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Six', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Seven', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Eight', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Nine', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Ten', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Eleven', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Twelve', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Thirteen', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},
    {text: 'Fourteen', cols: 1, rows: 1, imgpath: 'assets\\Images\\kastl.png'},

  ];
}

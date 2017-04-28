import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ravintolat-kahvilat',
  templateUrl: './ravintolat-kahvilat.component.html',
  styleUrls: ['./ravintolat-kahvilat.component.css']
})
export class RavintolatKahvilatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

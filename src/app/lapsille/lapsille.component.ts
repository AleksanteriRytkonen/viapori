import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lapsille',
  templateUrl: './lapsille.component.html',
  styleUrls: ['./lapsille.component.css']
})
export class LapsilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

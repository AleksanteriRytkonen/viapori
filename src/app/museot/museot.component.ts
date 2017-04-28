import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museot',
  templateUrl: './museot.component.html',
  styleUrls: ['./museot.component.css']
})
export class MuseotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

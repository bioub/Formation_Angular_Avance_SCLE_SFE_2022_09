import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  format = 'HH:mm:ss';
  delay = 1000;

  constructor() { }

  ngOnInit() {
  }

  updateDelay(event) {
    this.delay = Number(event);
  }

}

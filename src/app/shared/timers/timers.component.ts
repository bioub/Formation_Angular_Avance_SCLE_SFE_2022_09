import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {

  prop1 = '';
  prop2 = '';
  prop3 = 'C';

  constructor() { }

  ngOnInit(): void {
    this.prop3 = 'C';
    setTimeout(() => {
      this.prop1 = 'A';
    }, Math.random() * 5000);
    setTimeout(() => {
      this.prop2 = 'B';
    }, Math.random() * 5000);
  }

}

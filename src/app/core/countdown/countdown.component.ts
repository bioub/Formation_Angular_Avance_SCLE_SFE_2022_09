import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, startWith, switchMapTo, take } from 'rxjs/operators';

function countdown(startValue = 3) {
  return interval(1000).pipe(
    //  ----0----1----2---- 3  ---- 4  ---- 5  ----  6 ---...
    map((v) => startValue - 1 - v),
    //  ----2----1----0----(-1)----(-2)----(-3)----(-4)---...
    startWith(startValue),
    // 3----2----1----0----(-1)----(-2)----(-3)----(-4)---...
    take(startValue + 1)
    // 3----2----1----0|
  );
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements AfterViewInit {
  count = 10;

  @ViewChild('button') btnRef: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.btnRef.nativeElement, 'click')
      .pipe(switchMapTo(countdown(this.count)))
      // -------(click)-------------(click)--(click)-------
      //        3----2----1----0|
      //                            3----2---X
      //                                     3----2----1----0|
      // switchMapTo
      // -------3----2----1----0----3----2---3----2----1----0

      // si ça avait été mergeMap :
      // -------(click)-------------(click)--(click)-------
      //        3----2----1----0|
      //                            3----2----1----0|
      //                                     3----2----1----0|
      // mergeMapTo
      // -------3----2----1----0----3----2---31---20---1----0
      .subscribe((v) => {
        this.count = v;
      });
  }

  start() {}
}

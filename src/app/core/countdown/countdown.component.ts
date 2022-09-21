import { ThisReceiver } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, startWith, switchMap, switchMapTo, take, takeWhile, tap } from 'rxjs/operators';

function countdown(startValue = 3)  {
  return interval(1000).pipe(
    map((v) => startValue - 1 - v),
    startWith(startValue),
    take(startValue + 1),
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
      .subscribe((v) => {
        this.count = v;
      });
  }

  start() {}
}

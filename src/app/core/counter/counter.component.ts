import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterDecrement, counterIncrement } from 'src/app/store/actions';
import { countSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.count$ = this.store.select(countSelector);
  }

  increment() {
    // this.store.dispatch({ type: '[Counter] Increment', step: 2 })
    this.store.dispatch(counterIncrement({step: 1}));
  }

  decrement() {
    this.store.dispatch(counterDecrement({step: 1}));
  }
}

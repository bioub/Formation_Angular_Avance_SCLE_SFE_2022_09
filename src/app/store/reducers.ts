import { createReducer, on } from '@ngrx/store';
import { counterDecrement, counterIncrement } from './actions';

export type CounterState = number;
export type AppState = {
  count: CounterState
};

const initialState = 0;

// export function countReducer(state = initialState, action) {
//   switch (action.type) {
//     case '[Counter] Increment':
//       return state + 1;
//     case '[Counter] Decrement':
//       return state - 1;
//   }
//   return state;
// }

export const countReducer = createReducer(
  initialState,
  on(counterIncrement, (state, action): CounterState => state + action.step),
  on(counterDecrement, (state, action): CounterState => state - action.step)
);

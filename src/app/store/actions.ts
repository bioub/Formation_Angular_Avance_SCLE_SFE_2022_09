// function counterIncrement() {
//   return {
//     type: '[Counter] Increment'
//   }
// }

import { createAction, props } from "@ngrx/store";

export const counterIncrement = createAction('[Counter] Increment',
  props<{ step: number }>()
);


export const counterDecrement = createAction('[Counter] Decrement',
  props<{ step: number }>()
);

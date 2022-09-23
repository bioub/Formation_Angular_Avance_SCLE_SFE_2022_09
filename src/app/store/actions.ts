// function counterIncrement() {
//   return {
//     type: '[Counter] Increment'
//   }
// }

import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user';

export const counterIncrement = createAction(
  '[Counter] Increment',
  props<{ step: number }>()
);

export const counterDecrement = createAction(
  '[Counter] Decrement',
  props<{ step: number }>()
);

export const usersLoadList = createAction('[Users] Load List');
export const usersLoadListSuccess = createAction(
  '[Users] Load List Success',
  props<{ users: User[] }>()
);

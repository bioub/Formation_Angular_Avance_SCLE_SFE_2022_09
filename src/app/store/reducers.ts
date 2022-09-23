import { createReducer, on } from '@ngrx/store';
import { User } from '../shared/models/user';
import { counterDecrement, counterIncrement, usersLoadList, usersLoadListSuccess } from './actions';

export type CounterState = number;
export type UsersState = {
  loading: boolean,
  data: User[],
}
export type AppState = {
  count: CounterState
  users: UsersState
};

const initialState: AppState = {
  count: 0,
  users: {
    loading: false,
    data: [],
  }
};

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
  initialState.count,
  on(counterIncrement, (state, action): CounterState => state + action.step),
  on(counterDecrement, (state, action): CounterState => state - action.step)
);


export const usersReducer = createReducer(
  initialState.users,
  on(usersLoadList, (state, action): UsersState => ({
    ...state,
    loading: true,
    data: [],
  })),
  on(usersLoadListSuccess, (state, action): UsersState => ({
    ...state,
    loading: false,
    data: action.users,
  })),
);

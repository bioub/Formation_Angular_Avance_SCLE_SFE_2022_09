import { AppState } from "./reducers";

export function countSelector(state: AppState) {
  return state.count;
}

export function usersSelector(state: AppState) {
  return state.users;
}


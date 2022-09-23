import { AppState } from "./reducers";

export function countSelector(state: AppState) {
  return state.count;
}



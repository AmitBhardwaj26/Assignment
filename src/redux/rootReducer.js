import { combineReducers } from "redux";
// import { characterReducer } from "./character/characterReducer";
// import { listReducer } from "./midarea/list";
import { Reducer } from "./Temp/reduce";

export const rootReducer = combineReducers({
  character: Reducer,
  list: Reducer,
});

import { combineReducers } from "@reduxjs/toolkit";
import { fn_reducer, cl_reducer } from "./CounterSlice/counter_SLICE";
import { header_reducer } from "./HeaderSlice/header_SLICE";
import { log_reducer } from "./LOG/log_SLICE.js";
const objOfAllReducers = combineReducers({
  functionalCounter: fn_reducer,
  classCounter: cl_reducer,
  headerSlice: header_reducer,
  logSlice: log_reducer,
});
export default objOfAllReducers;

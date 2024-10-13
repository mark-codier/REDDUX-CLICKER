import { createSlice} from "@reduxjs/toolkit";
import { counterReducers } from "./counter_REDUCERS";
const defaultCounterReduxState = {
    value: 0,
    dynamicValue: 1,
    show: true,
}; 
const counterFunctionalSlice = createSlice({
    name: 'functionalCounter',
    initialState: defaultCounterReduxState,
    reducers: counterReducers,
})
const counterClassSlice = createSlice({
    name: 'classCounter',
    initialState: defaultCounterReduxState,
    reducers: counterReducers,
})
const {actions:fn_actions, reducer:fn_reducer} = counterFunctionalSlice
const {actions:cl_actions, reducer:cl_reducer} = counterClassSlice
export {fn_reducer, cl_reducer}
export const counterActions = {fn:fn_actions,cl: cl_actions}
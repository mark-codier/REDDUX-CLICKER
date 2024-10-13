import { createSlice } from "@reduxjs/toolkit";
import { headerReducers } from "./header_REDUCERS";
const defaultHeaderReduxState = {
    status: false,
    navData:{
        url: '/',
    },
};
const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: defaultHeaderReduxState,
    reducers: headerReducers
});
const { actions: header_actions, reducer: header_reducer } = headerSlice;
export { header_actions, header_reducer };
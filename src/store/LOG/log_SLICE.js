import { createSlice } from "@reduxjs/toolkit";
import { logReducers } from "./log_REDUCER.js";
const n = "nickname"; // OOOOOO ДАААА
const p = "password"; // ВОТ ЭТО Я СОКРАТИЛ КОНЕЧНО
export const defaultFormDataObj = {
  isValid:true,
  inputsValidation: {
    [n]: true,
    [p]: true,
  }, // obj for inputs validation
  inputsData: {
    [n]: "",
    [p]: "",
  }, // obj for current data of inputs
};
const defaultLogReduxState = {
  isRedacting: false,
  userData: {
    // USERS DATA for log
    [n]: "4rchie-nv",
    [p]: "1234",
  },
  formData: defaultFormDataObj,
};
const logSlice = createSlice({
  name: "logSlice",
  initialState: defaultLogReduxState,
  reducers: logReducers,
});
const { actions: log_actions, reducer: log_reducer } = logSlice;
export { log_actions, log_reducer };

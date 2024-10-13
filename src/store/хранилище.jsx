import { configureStore} from "@reduxjs/toolkit";
import objOfAllReducers from "./combineReducers";
const storchik = configureStore({
  reducer: objOfAllReducers
});
export default storchik;

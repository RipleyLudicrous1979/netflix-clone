// import other reducers.
import loading from "./LoadingReducer";
// import combine reducers.
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  loading
});

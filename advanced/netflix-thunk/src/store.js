// import create store.
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
// import root reducer.
import rootReducer from "./reducers";
// import thunk
import thunk from "redux-thunk";

export default createStore(rootReducer, applyMiddleware(thunk));

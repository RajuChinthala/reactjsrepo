import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import RootReducer from "./rootReducer.js";

const store = createStore(RootReducer, applyMiddleware(logger, thunk));

export default store;

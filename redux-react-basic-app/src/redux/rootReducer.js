import { combineReducers } from "redux";
import IceCreamReducer from "../redux/icecream/iceCreamReducer.js";
import CakeReducer from "../redux/cake/cakeReducer.js";

const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
});

export default RootReducer;

import { combineReducers } from "redux";
import IceCreamReducer from "../redux/icecream/iceCreamReducer.js";
import CakeReducer from "../redux/cake/cakeReducer.js";
import UserReducer from "../redux/user/userReducer.js";

const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  user: UserReducer,
});

export default RootReducer;

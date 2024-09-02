import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESFULLY,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

const intialState = (users) => {
  loading: false;
  users: [];
  error: "";
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESFULLY:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;

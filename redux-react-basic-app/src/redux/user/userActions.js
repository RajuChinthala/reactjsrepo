import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESFULLY,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

export const fetchUserRequest = (users) => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: users,
  };
};

export const fetchUsersSuccessfully = (users) => {
  return {
    type: FETCH_USERS_SUCCESFULLY,
    payload: users,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccessfully(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};

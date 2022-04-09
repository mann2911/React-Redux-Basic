import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
} from "./UserActionsTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.msg;
        dispatch(fetchUserError(errorMsg));
      });
  };
};

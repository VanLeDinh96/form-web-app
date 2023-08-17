import authAPI from "../../services/api";
import * as types from "./types";

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST
  };
};

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user
  };
};

export const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error
  };
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const user = await authAPI.login(credentials);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

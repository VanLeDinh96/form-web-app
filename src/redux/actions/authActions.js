import authAPI from "../../services/api";
import history from "../../utils/history";
import * as types from "./types";

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
    try {
      const user = await authAPI.login(credentials);
      dispatch(loginSuccess(user));
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

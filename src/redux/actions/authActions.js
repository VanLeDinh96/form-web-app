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
      const response = await authAPI.login(credentials);
      const token = response.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess(credentials));
      history.push("/");
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

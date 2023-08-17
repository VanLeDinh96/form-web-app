import * as types from "../actions/types";

const initialState = {
  user: null,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default authReducer;

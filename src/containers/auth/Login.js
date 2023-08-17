import React, { useState } from "react";
import { connect } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  loginUser
} from "../../redux/actions/authActions";
import * as types from "../../redux/actions/types";
import "./Login.css";

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const loginRequest = () => {
    return {
      type: types.LOGIN_REQUEST
    };
  };

  // const loginSuccess = (user) => {
  //   return {
  //     type: types.LOGIN_SUCCESS,
  //     payload: user
  //   };
  // };

  // const loginFailure = (error) => {
  //   return {
  //     type: types.LOGIN_FAILURE,
  //     payload: error
  //   };
  // };

  const handleLogin = () => {
    loginUser({ username, password });
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="button login__submit" onClick={handleLogin}>
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);

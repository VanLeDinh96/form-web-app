import React from "react";
import { connect } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  loginUser
} from "../../redux/actions/authActions";

class Login extends React.Component {
  handleLogin = () => {
    const { username, password } = this.state;

    this.props.loginRequest();

    this.props.loginUser({ username, password });
  };
}

const mapDispatchToProps = {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);

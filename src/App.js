import React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";

const App = ({ isAuthenticated }) => {
  console.log("authen ", isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/dashboard">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(App);

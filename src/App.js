import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Login from "./containers/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";

const App = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/home"
          isAuthenticated={isAuthenticated}
          component={Home}
        />
        <PrivateRoute
          path="/"
          isAuthenticated={isAuthenticated}
          component={Home}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(App);

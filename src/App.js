import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Login from "./containers/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/dashboard"
          isAuthenticated={isAuthenticated}
          component={Dashboard}
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

export default App;

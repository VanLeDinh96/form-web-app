// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./containers/auth/Login"; // Update the path accordingly

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

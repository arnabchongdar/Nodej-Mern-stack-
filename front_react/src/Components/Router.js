import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Register from "./Register";
import KycPage from "./KycPage";
function Router1() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/kycPage">
          <KycPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Router1;

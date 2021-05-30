import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServiceScreen from "../pages/ServiceScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/service" component={ServiceScreen} />
      </Switch>
    </Router>
  );
}

export default App;

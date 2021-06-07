import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServiceScreen from "../pages/ServiceScreen";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service/:lang" component={ServiceScreen} />
        </Switch>
      </Router>
    </ParallaxProvider>
  );
}

export default App;

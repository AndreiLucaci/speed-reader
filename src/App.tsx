import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/read" component={Content} />
      </Switch>
    </div>
  );
};

export default App;

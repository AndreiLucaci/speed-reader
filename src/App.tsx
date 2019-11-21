import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Content from "./components/Content/Content";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App-header">Speed reading app</h1>
      <div className="App-body">
        <Content></Content>
      </div>
    </div>
  );
};

export default App;

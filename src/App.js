import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        HELLO WORLD FROM KW this is change5
      </header>
    </div>
  );
}

export default App;

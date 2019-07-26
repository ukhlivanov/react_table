import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LocationProvider, Match } from "react-location";

import "./styles.css";
import Basic from "./examples/Basic";


export default function App() {
  return (
    <LocationProvider>
      <div className="App">
        <Match path="/" component={Basic} />
      </div>
    </LocationProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

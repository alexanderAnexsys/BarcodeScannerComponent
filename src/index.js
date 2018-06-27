import React from "react";
import ReactDOM from "react-dom";
import Bardcodetextfield from "./BarcodeTextField.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Bardcodetextfield />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import Bardcodetextfield from "./BarcodeTextField.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div id="scanner-container" />
      <div>
        <p style={{ display: "inline-block" }}>Barcode: </p>
        <Bardcodetextfield style={{ display: "inline-block" }} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

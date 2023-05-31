import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import CryptoContext from "./CryptoContext";
import 'react-alice-carousel/lib/alice-carousel.css';
import { HashRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <HashRouter>
        <App />
      </HashRouter>
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./others/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);

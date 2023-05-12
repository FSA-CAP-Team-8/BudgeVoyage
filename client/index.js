/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./app/App.js";
import { BrowserRouter as Router } from "react-router-dom";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

const root = createRoot(document.getElementById("app"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

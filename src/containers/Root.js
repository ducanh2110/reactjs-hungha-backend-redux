import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import DevTools from "./DevTools";
import App from "../components/App";

const Root = () => {
  return (
    <Provider store={store}>
        <div>
          <Router>
            <App />
          </Router>
          <DevTools />
        </div>
    </Provider>
  );
};

export default Root;

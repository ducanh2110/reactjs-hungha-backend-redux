import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import store, {persiststore} from "../store";
import App from "../components/App";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
            <Router>
              <App />
            </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;

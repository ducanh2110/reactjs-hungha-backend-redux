import React from "react";
import {Provider} from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory';
import {Router} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import store, {persiststore} from "../store";
import DevTools from "./DevTools";
import {Alert} from 'antd';
import App from "../components/App";
import {Provider as AlertProvider} from "react-alert";

const history = createBrowserHistory();
const options = {
    timeout: 5000,
    position: "top right"
};
const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persiststore} loading={null}>
                <AlertProvider template={Alert} {...options}>
                    <Router history={history} key={Math.random()}>
                        <App />
                    </Router>
                </AlertProvider>
                <DevTools />
            </PersistGate>
        </Provider>
    );
};

export default Root;

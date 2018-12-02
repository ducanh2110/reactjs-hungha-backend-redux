import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./containers/Root";
import injectGlobalStyles from "./injectGlobalStyles";
import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
injectGlobalStyles();

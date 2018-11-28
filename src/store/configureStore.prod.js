import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import api from "../middleware/api";
import {persistStore} from "redux-persist";

const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(api),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            store.replaceReducer(rootReducer);
        });
    }
    const persiststore = persistStore(store);
    return { store, persiststore };
};

export default configureStore;

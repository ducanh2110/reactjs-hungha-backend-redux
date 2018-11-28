import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovie";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const rootReducer =  combineReducers({
  movies,
  selectedMovie
});

const persistConfig = {
    key: "redbox24h",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;


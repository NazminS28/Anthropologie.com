import { legacy_createStore } from "redux";
import { authReducer } from "./reducer";

export const store = legacy_createStore(authReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

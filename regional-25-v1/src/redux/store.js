import { legacy_createStore } from "redux";
import { reducer } from "./reducers/Reducers";

const store = legacy_createStore(reducer);

export default store;

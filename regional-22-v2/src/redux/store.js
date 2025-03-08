import { legacy_createStore } from "redux";
import { paysReducer } from "./reducers/reducers";

const store = legacy_createStore(paysReducer);

export default store;

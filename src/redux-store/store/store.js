import { createStore } from "redux";
import myReducer from "../reducers/reducers";
const store = createStore(myReducer);
export default store;

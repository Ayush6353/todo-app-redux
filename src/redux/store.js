import { combineReducers, createStore } from "redux";
import todoReducers from "./reducers/todo-reducers";

const rootReducer = combineReducers({todos:todoReducers,})
const store = createStore(rootReducer)

export default store    
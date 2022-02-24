import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { UserReducer } from "./reducers/UserReducer";
const rootReducer = combineReducers({
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

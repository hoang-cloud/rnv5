import { combineReducers } from "redux";
import { login } from "./login";

const rootReducer = combineReducers({
  loginState: login,
});

export default rootReducer;

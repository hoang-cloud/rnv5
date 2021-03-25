import { combineReducers } from 'redux';
import { login } from './login';
import { count } from './count';
import { user } from './user';
const rootReducer = combineReducers({
  loginState: login,
  countState: count,
  userState: user,
});

export default rootReducer;

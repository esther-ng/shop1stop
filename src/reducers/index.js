import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ShoppingFormReducer from './ShoppingFormReducer';

export default combineReducers({
  auth: AuthReducer,
  list: ShoppingFormReducer
});

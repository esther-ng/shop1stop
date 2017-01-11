import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ShoppingFormReducer from './ShoppingFormReducer';
import ShoppingListReducer from './ShoppingListReducer';
import ListItemReducer from './ListItemReducer';

export default combineReducers({
  auth: AuthReducer,
  list: ShoppingFormReducer,
  lists: ShoppingListReducer,
  listItem: ListItemReducer
});

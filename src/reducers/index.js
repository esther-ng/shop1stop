import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ShoppingFormReducer from './ShoppingFormReducer';
import ShoppingListReducer from './ShoppingListReducer';
import ListItemReducer from './ListItemReducer';
import ListItemFormReducer from './ListItemFormReducer';
import ProductReducer from './ProductReducer';
import CompareReducer from './CompareReducer';
import ProductFormReducer from './ProductFormReducer';

export default combineReducers({
  auth: AuthReducer,
  list: ShoppingFormReducer,
  lists: ShoppingListReducer,
  listItems: ListItemReducer,
  listItem: ListItemFormReducer,
  products: ProductReducer,
  selected: ProductFormReducer,
  compare: CompareReducer
});

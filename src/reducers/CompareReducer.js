import {
  COMPARE_KEYS,
  SHOW_STORE_LIST
} from '../actions/types';

const INITIAL_STATE = {
  storeName: '',
  listItems: {},
  total: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case PRODUCT_MATCHES_FETCH_SUCCESS:
    //   console.log(action.payload);
    //   return action.payload;
    //
    case COMPARE_KEYS:
      return INITIAL_STATE;

    case SHOW_STORE_LIST:
      return action.payload;

    default:
      return state;
  }
};

import {
  PRODUCT_MATCH_CREATE,
  PRODUCT_MATCH_UPDATE,
  PRODUCT_MATCH_ADD,
  PRODUCT_MATCH_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PRODUCT_MATCH_UPDATE:
        return action.payload;

      // case LIST_ITEM_CREATE:
      // case LIST_ITEM_ADD:
      // case LIST_ITEM_SAVE_SUCCESS:
      //   return INITIAL_STATE;

      default:
        return state;
    }
};

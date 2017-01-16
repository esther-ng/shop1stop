import {
  PRODUCT_MATCH_CREATE,
  PRODUCT_MATCH_UPDATE,
  PRODUCT_MATCH_ADD,
  PRODUCT_MATCH_SAVE_SUCCESS,
  PRODUCT_MATCH_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PRODUCT_MATCH_UPDATE:
        return action.payload;

      case PRODUCT_MATCH_CREATE:
      case PRODUCT_MATCH_ADD:
      case PRODUCT_MATCH_SAVE_SUCCESS:
        return INITIAL_STATE;

      case PRODUCT_MATCH_FETCH_SUCCESS:
        console.log(action.payload);
        return action.payload;

      default:
        return state;
    }
};

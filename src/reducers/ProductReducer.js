import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
  PRODUCT_MATCHES_RESET,
  PRODUCT_MATCH_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_MATCHES_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;

    case PRODUCT_MATCH_FETCH_SUCCESS:
      return action.payload;

    case PRODUCT_MATCHES_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

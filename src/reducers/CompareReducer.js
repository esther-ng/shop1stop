import {
  COMPARE_KEYS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case PRODUCT_MATCHES_FETCH_SUCCESS:
    //   console.log(action.payload);
    //   return action.payload;
    //
    case COMPARE_KEYS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  safeway: [],
  qfc: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_MATCHES_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

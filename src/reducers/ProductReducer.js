import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
  PRODUCT_MATCHES_FETCH_FAIL,
  PRODUCT_MATCHES_FETCHING,
  PRODUCT_MATCHES_RESET
} from '../actions/types';

const INITIAL_STATE = {
  products: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_MATCHES_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;

    case PRODUCT_MATCHES_FETCH_FAIL:
      return { ...state, loading: false, error: 'Could not retrieves matches. Please check your network connection.' };

    case PRODUCT_MATCHES_FETCHING:
      return { ...state, loading: true, error: '' };

    case PRODUCT_MATCHES_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};

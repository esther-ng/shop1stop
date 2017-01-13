import {
  LIST_ITEMS_FETCH_SUCCESS,
  LIST_ITEMS_CLEAR
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_ITEMS_FETCH_SUCCESS:
      return action.payload;

    case LIST_ITEMS_CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};

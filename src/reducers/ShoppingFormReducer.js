import {
  SHOPPING_LIST_CREATE,
  SHOPPING_LIST_UPDATE,
  SHOPPING_LIST_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SHOPPING_LIST_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };

      case SHOPPING_LIST_CREATE:
        return INITIAL_STATE;

      case SHOPPING_LIST_SAVE_SUCCESS:
        return INITIAL_STATE;

      default:
        return state;
    }
};

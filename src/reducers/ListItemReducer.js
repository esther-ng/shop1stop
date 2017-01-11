import {
  LIST_ITEM_CREATE,
  LIST_ITEM_UPDATE,
  LIST_ITEMS_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  quantity: null,
  item: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LIST_ITEM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };

      case LIST_ITEM_CREATE:
        return INITIAL_STATE;

      case LIST_ITEMS_SAVE_SUCCESS:
        return INITIAL_STATE;

      default:
        return state;
    }
};

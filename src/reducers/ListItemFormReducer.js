import {
  LIST_ITEM_CREATE,
  LIST_ITEM_UPDATE,
  LIST_ITEM_ADD,
  LIST_ITEM_FAIL,
  LIST_ITEM_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  quantity: 1,
  item: '',
  list: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LIST_ITEM_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };

      case LIST_ITEM_CREATE:
      case LIST_ITEM_ADD:
      case LIST_ITEM_FAIL:
      case LIST_ITEM_SAVE_SUCCESS:
        return INITIAL_STATE;

      default:
        return state;
    }
};

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LIST_ITEMS_FETCH_SUCCESS,
  LIST_ITEM_SAVE_SUCCESS,
  LIST_ITEM_UPDATE,
  LIST_ITEM_CREATE
} from './types';

export const listItemsFetch = ({ list }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppingLists/${list.uid}/listItems`)
      .on('value', snapshot => {
        dispatch({ type: LIST_ITEMS_FETCH_SUCCESS, payload: snapshot.val() });
      });
      Actions.shoppingListView({ type: 'reset' });
  };
};

export const listItemUpdate = ({ prop, value }) => {
  return {
    type: LIST_ITEM_UPDATE,
    payload: { prop, value }
  };
};

export const listItemCreate = ({ item, quantity, list }) => {
  const { currentUser } = firebase.auth();
  // console.log(listItem);
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${list.uid}/listItems`)
    .push({ item, quantity })
    .then(() => {
      dispatch({ type: LIST_ITEM_CREATE });
      console.log(this);
      Actions.shoppingListView({ type: 'reset', list, title: list.name });
    });
  };
};

export const listItemSave = ({ item, quantity, list, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${list.uid}/listItems/${uid}`)
    .set({ item, quantity })
    .then(() => {
      dispatch({ type: LIST_ITEM_SAVE_SUCCESS });
      console.log(this);
      Actions.shoppingListView({ type: 'reset', list, title: list.name });
    });
  };
};

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SHOPPING_LIST_CREATE,
  SHOPPING_LIST_UPDATE,
  SHOPPING_LIST_VIEW,
  SHOPPING_LIST_INDEX,
  SHOPPING_LISTS_FETCH_SUCCESS,
  LIST_ITEMS_CLEAR
} from './types';


export const shoppingListUpdate = ({ prop, value }) => {
  return {
    type: SHOPPING_LIST_UPDATE,
    payload: { prop, value }
  };
};

export const shoppingListCreate = ({ name }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    const listID = firebase.database().ref(`/users/${currentUser.uid}/shoppingLists`)
    .push().key;
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${listID}`).update({ name })
    .then(() => {
      dispatch({ type: SHOPPING_LIST_CREATE, payload: { listID } });
      Actions.shoppingIndex({ type: 'reset' });
    });
  };
};

export const shoppingListsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppingLists/`)
      .on('value', snapshot => {
        dispatch({ type: SHOPPING_LISTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
      Actions.shoppingIndex({ type: 'reset' });
  };
};

export const shoppingListView = ({ name, uid }) => {
  return (dispatch) => {
    dispatch({ type: SHOPPING_LIST_VIEW, payload: { name, uid } });
    // dispatch({ type: LIST_ITEMS_CLEAR });
    Actions.shoppingListView({ list: { name, uid }, title: name });
  };
};

export const shoppingListIndex = () => {
  return (dispatch) => {
    dispatch({ type: SHOPPING_LIST_INDEX });
    // dispatch({ type: LIST_ITEMS_CLEAR });
  };
};

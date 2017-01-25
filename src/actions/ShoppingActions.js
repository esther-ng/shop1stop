import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SHOPPING_LIST_CREATE,
  SHOPPING_LIST_UPDATE,
  SHOPPING_LIST_VIEW,
  SHOPPING_LIST_INDEX,
  SHOPPING_LIST_FAIL,
  SHOPPING_LISTS_FETCH_SUCCESS
} from './types';


export const shoppingListUpdate = ({ prop, value }) => {
  return {
    type: SHOPPING_LIST_UPDATE,
    payload: { prop, value }
  };
};

export const shoppingListCreate = ({ name }) => {
  if (name !== '') {
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
  } else {
    return {
      type: SHOPPING_LIST_FAIL
    };
  }
};

export const shoppingListEdit = ({ name, uid }) => {
  return () => {
    Actions.shoppingListEdit({ list: { name, uid } });
  };
};

export const shoppingListSave = ({ name, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${uid}`)
      .update({ name })
      .then(() => {
        Actions.shoppingIndex({ type: 'reset' });
      });
  };
};

export const shoppingListDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${uid}`)
      .remove()
      .then(() => {
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
    Actions.shoppingListView({ list: { name, uid }, title: name });
  };
};

export const shoppingListIndex = () => {
  return (dispatch) => {
    dispatch({ type: SHOPPING_LIST_INDEX });
  };
};

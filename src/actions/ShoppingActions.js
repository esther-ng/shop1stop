import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import {
  SHOPPING_LIST_CREATE,
  SHOPPING_LIST_UPDATE,
  SHOPPING_LISTS_FETCH_SUCCESS,
  LIST_ITEMS_FETCH_SUCCESS,
  LIST_ITEM_UPDATE
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
    const listID = firebase.database().ref(`/users/${currentUser.uid}/shoppinglists`)
    .push().key;
    firebase.database().ref(`/users/${currentUser.uid}/shoppinglists/${listID}`).update({ name })
    .then(() => {
      dispatch({ type: SHOPPING_LIST_CREATE, payload: { listID } });
      Actions.shoppingIndex({ type: 'reset' });
    });
  };
};

export const shoppingListsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppinglists/`)
      .on('value', snapshot => {
        dispatch({ type: SHOPPING_LISTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
      Actions.shoppingIndex({ type: 'reset' });
  };
};

export const listItemsFetch = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppinglists/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: LIST_ITEMS_FETCH_SUCCESS, payload: snapshot.val() });
      });
      Actions.shoppingListForm({ type: 'reset' });
  };
};

export const listItemUpdate = ({ prop, value }) => {
  return {
    type: LIST_ITEM_UPDATE,
    payload: { prop, value }
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOY_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};

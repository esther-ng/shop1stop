import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import {
  SHOPPING_LIST_CREATE,
  SHOPPING_LIST_UPDATE,
  LIST_ITEMS_FETCH_SUCCESS
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
    firebase.database().ref(`/users/${currentUser.uid}/shoppinglists`)
    .push({ name })
    .then(() => {
      dispatch({ type: SHOPPING_LIST_CREATE });
      Actions.shoppingListForm({ type: 'reset' });
    });
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

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import {
  SHOPPING_LIST_CREATE
} from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const shoppingListCreate = ({ name, items }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppinglists`)
    .push({ name, items })
    .then(() => {
      dispatch({ type: SHOPPING_LIST_CREATE });
      // Actions.employeeList({ type: 'reset' });
    });
  };
};

export const listItemsFetch = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppinglist/${uid}`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
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

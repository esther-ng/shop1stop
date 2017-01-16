import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  STORE_LIST_FETCH_SUCCESS
} from './types';

export const storeListFetch = ({ products }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/shoppingLists/${list.uid}/listItems`)
      .on('value', snapshot => {
        dispatch({ type: LIST_ITEMS_FETCH_SUCCESS, payload: snapshot.val() });
      });
      Actions.shoppingListView({ type: 'reset' });
  };
};

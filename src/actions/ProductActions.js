import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
  PRODUCT_MATCH_UPDATE,
  PRODUCT_MATCH_CREATE,
  PRODUCT_MATCH_ADD,
  PRODUCT_MATCH_FETCH_SUCCESS,
  PRODUCT_MATCHES_FETCH_FAIL,
  PRODUCT_MATCHES_RESET
} from './types';

export const productMatchesFetch = ({ listItem, storeID }) => {
  // console.log(listItem);
  const { item } = listItem;
  // console.log(item);
  const baseURL = 'http://indechick.com/products/search?query=';

  return (dispatch) => {
    axios.get(`${baseURL}${item}&store=${storeID}`)
      .then((response) => {
        dispatch({ type: PRODUCT_MATCHES_FETCH_SUCCESS, payload: response.data });
      })
      .catch(() => dispatch({ type: PRODUCT_MATCHES_FETCH_FAIL }));
      // .then(Actions.selectMatch({ storeID, title: 'Selection', listItem }));
  };
};

export const productMatchesReset = () => {
  return {
    type: PRODUCT_MATCHES_RESET
  };
};

export const productMatchCreate = ({ listItem, selected, list }) => {
  const { currentUser } = firebase.auth();
  const store = (selected.store_id === 1) ? 'qfc' : 'safeway';

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${list.uid}/listItems/${listItem.uid}`)
    .update({ [store]: selected })
    .then(() => {
      dispatch({ type: PRODUCT_MATCH_CREATE });
      Actions.pop({ refresh: { ...list } });
    });
  };
};

export const productMatchFetch = ({ listItem, list }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/shoppingLists/${list.uid}/listItems/${listItem.uid}`)
    .on('value', snapshot => {
      dispatch({ type: PRODUCT_MATCH_FETCH_SUCCESS, payload: snapshot.val() });
    });
    Actions.selectMatches();
  };
};

export const productMatchUpdate = (product) => {
  return {
    type: PRODUCT_MATCH_UPDATE,
    payload: product
  };
};

export const productMatchAdd = () => {
  return {
    type: PRODUCT_MATCH_ADD
  };
};

import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
} from './types';

export const productMatchesFetch = ({ listItem }) => {
  console.log(listItem);
  const { item } = listItem;
  console.log(item);
  const baseURL = 'http://indechick.com/products/search?query=';

  return (dispatch) => {
    axios.get(`${baseURL}${item}&store=2`)
      .then((response) => {
        dispatch({ type: PRODUCT_MATCHES_FETCH_SUCCESS, payload: response.data });
      });
  };
};

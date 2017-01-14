import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
  PRODUCT_MATCH_UPDATE
} from './types';

const productMatchFetchAll = ({ listItem }) => {
  return (dispatch) => {
    dispatch(productMatchesFetchS({ listItem }));
    dispatch(productMatchesFetchQ({ listItem }));
  }
}

const productMatchesFetch = ({ listItem }) => {
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

const productMatchesFetchQ = ({ listItem }) => {
  console.log(listItem);
  const { item } = listItem;
  console.log(item);
  const baseURL = 'http://indechick.com/products/search?query=';

  return (dispatch) => {
    axios.get(`${baseURL}${item}&store=2`)
      .then((response) => {
        dispatch({ type: PRODUCT_MATCHES_Q_FETCH_SUCCESS, payload: response.data });
      });
  };
};

export const productMatchUpdate = ({ prop, value }) => {
  return {
    type: PRODUCT_MATCH_UPDATE,
    payload: { prop, value }
  };
};
// use a fetch succes for qfc and one for sfw
// const productsMap = (products) => {
//   products.forEach((product) => {
//     if (!productsMap[product.store_id]) {
//       productsMap[foodItem.store_id] = [];
//     }
//   });
// };

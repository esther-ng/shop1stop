import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_MATCHES_FETCH_SUCCESS,
  PRODUCT_MATCH_UPDATE,
  PRODUCT_MATCH_CREATE
} from './types';

// const productMatchFetchAll = ({ listItem }) => {
//   return (dispatch) => {
//     dispatch(productMatchesFetchS({ listItem }));
//     dispatch(productMatchesFetchQ({ listItem }));
//   }
// }

export const productMatchesFetch = ({ listItem, storeID }) => {
  console.log(listItem);
  const { item } = listItem;
  console.log(item);
  const baseURL = 'http://indechick.com/products/search?query=';

  return (dispatch) => {
    axios.get(`${baseURL}${item}&store=${storeID}`)
      .then((response) => {
        dispatch({ type: PRODUCT_MATCHES_FETCH_SUCCESS, payload: response.data });
      });
  };
};

export const productMatchCreate = ({ list, listItem, selected }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/selections/${list.uid}/${listItem.uid}/${selected.store_id}`)
    .set({ selected })
    .then(() => {
      dispatch({ type: PRODUCT_MATCH_CREATE});
      Actions.pop({ refresh: { ...listItem, [selected.store_id]: selected } });
    });
  };
};
// const productMatchesFetchQ = ({ listItem }) => {
//   console.log(listItem);
//   const { item } = listItem;
//   console.log(item);
//   const baseURL = 'http://indechick.com/products/search?query=';
//
//   return (dispatch) => {
//     axios.get(`${baseURL}${item}&store=2`)
//       .then((response) => {
//         dispatch({ type: PRODUCT_MATCHES_Q_FETCH_SUCCESS, payload: response.data });
//       });
//   };
// };

export const productMatchUpdate = (product) => {
  return {
    type: PRODUCT_MATCH_UPDATE,
    payload: product
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

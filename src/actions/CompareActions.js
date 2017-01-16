import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
  COMPARE_KEYS
} from './types';

/*
1. Get state.listItems.keys
2. Use keys to fetch selections
3. Each selection has two products
4. Each row should generate two product views?
*/

export const compareProducts = (items) => {
  // use snapshot.forEach to get uids? console.log(getState().listItems.keys);
  // console.log(listItems);
  const keys = _.map(items, 'uid');
  console.log(keys);
  return { type: COMPARE_KEYS };
};

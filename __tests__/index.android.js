import 'react-native';
import React from 'react';
import shop1stop from '../index.android.js';
import { calculateTotals } from '../src/actions';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <shop1stop />
  );
});

describe('calculateTotals action', () => {
  let listItems = {
    "-KacTwsXSGv9B7ev5Sla" : {
      "item" : "Ribs",
      "qfc" : {
        "conditions" : "lb With Card",
        "description" : "Bone-In, Beef Rib",
        "id" : 65,
        "img_url" : "https://f.wishabi.net/page_items/73901320/1483123353/extra_large.jpg",
        "name" : "Beef Chuck Flanken Style or Short Ribs",
        "sale_price" : 499,
        "store_id" : 1,
        "valid_from" : "2017-01-04T00:00:00.000Z",
        "valid_til" : "2017-01-10T23:59:59.000Z"
      },
      "quantity" : 2,
      "safeway" : {
        "conditions" : "$3.99 LB. With Card",
        "description" : "Bone-In Previously Frozen",
        "id" : 139,
        "img_url" : "http://ct.safeway.com/api/circularimages/v5/images/C_3038071_2_d9d07ce0787b/300/jpg",
        "name" : "Safeway SELECT Extra Meaty Pork Loin Back Ribs",
        "sale_price" : 399,
        "store_id" : 2,
        "valid_from" : "2016-12-26T00:00:00.000Z",
        "valid_til" : "2017-01-27T23:59:59.000Z"
      }
    },
    "-KacX20gCA94LTQ92OYD" : {
      "item" : "Eggs",
      "qfc" : {
        "conditions" : "With Card",
        "description" : "",
        "id" : 93,
        "img_url" : "https://f.wishabi.net/page_items/73899988/1483123360/extra_large.jpg",
        "name" : "Simple Truth Cage Free Eggs 18 ct, or Simple Truth Organic Eggs, 12 ct; Brown",
        "sale_price" : 399,
        "store_id" : 1,
        "valid_from" : "2017-01-04T00:00:00.000Z",
        "valid_til" : "2017-01-10T23:59:59.000Z"
      },
      "quantity" : 1,
      "safeway" : {
        "conditions" : "$4.49 EA. with card",
        "description" : "18 ct",
        "id" : 661,
        "img_url" : "http://ct.safeway.com/api/circularimages/v5/images/C_3040405_9_3c23c2e9654e/300/jpg",
        "name" : "Open Nature Cage Free Large Eggs",
        "sale_price" : 449,
        "store_id" : 2,
        "valid_from" : "2017-01-04T00:00:00.000Z",
        "valid_til" : "2017-01-10T23:59:59.000Z"
      }
    }};

  it('should calculate total based on price and quantity', () => {
    expect(calculateTotals(listItems, 'qfc')).toEqual(((499*2 + 399*1) / 100).toFixed(2));
  });
});

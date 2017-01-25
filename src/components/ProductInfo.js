import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { productMatchUpdate } from '../actions';

const ProductInfo = ({ product }) => {
  const { name, sale_price, reg_price, conditions, description, img_url, store_id, valid_from, valid_til } = product;

  const store = (store_id === 1) ? 'QFC' : 'Safeway';
  const price = (sale_price) ? `$${(sale_price / 100).toFixed(2)} on Sale` : `$${(reg_price / 100).toFixed(2)}`;
  const parens = (conditions) ? `(${conditions})` : '';
  const details = (description) ? description : '';
  const valid = (valid_from) ? `${valid_from} - ${valid_til}` : '';

  styles.storeStyle.borderColor = (store_id === 1) ? '#2F6690' : '#DF2935';
  styles.saleStyle.color = (sale_price) ? 'red' : 'grey';

    return (
            <CardSection>
              <View style={styles.column}>
              <Text style={styles.storeStyle}>{store}</Text>
              <Image
                style={styles.thumbnailStyle}
                source={{ uri: img_url }}
              />
              </View>
              <View style={styles.textContainer}>
              <Text style={styles.titleStyle}>
              {name}
              </Text>
              <Text style={styles.saleStyle}>
              {price} {parens}
              </Text>
              <Text style={styles.detailStyle}>
              {details}
              </Text>
              <Text style={styles.detailStyle}>
              {valid}
              </Text>
              </View>
            </CardSection>
    );
  };

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 20
  },
  saleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 20
  },
  detailStyle: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 20,
    fontStyle: 'italic'
  },
  textContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    paddingRight: 30
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    marginLeft: 10
  },
  column: {
    flexDirection: 'column'
  },
  storeStyle: {
    // flex: 1,
    // marginLeft: 2,
    marginBottom: 5,
    padding: 3,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey'
  }
};

export default ProductInfo;

import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { productMatchUpdate } from '../actions';

const ProductInfo = ({ product }) => {
  const { name, sale_price, conditions, description, img_url, store_id, valid_from, valid_til } = product;

  const store = (store_id === 1) ? 'QFC' : 'Safeway';

  styles.storeStyle.borderColor = (store_id === 1) ? '#2F6690' : '#DF2935';

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
              <Text style={styles.titleStyle}>
              ${(sale_price / 100).toFixed(2)} ({conditions})
              </Text>
              <Text style={styles.detailStyle}>
              {description}
              </Text>
              <Text style={styles.detailStyle}>
              Valid {valid_from.substring(0, 10)} - {valid_til.substring(0, 10)}
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

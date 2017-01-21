import React, { Component } from 'react';
import _ from 'lodash';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import ProductInfo from './ProductInfo';
import { productMatchUpdate } from '../actions';

class ProductInfoEdit extends Component {

  onRowPress() {
    console.log(this.props.item);
    const { item, product } = this.props;
    // console.log(listItem);
    if (product.store_id === 1) {
      Actions.selectMatch({ storeID: 1, title: 'QFC Selection', listItem: item });
    } else {
      Actions.selectMatch({ storeID: 2, title: 'Safeway Selection', listItem: item });
    }
  }

  render() {
    console.log(this.props.product);
    const { product } = this.props;

    return (
      <TouchableHighlight
        onPress={this.onRowPress.bind(this)}
        underlayColor="#3BA99C"
      >
        <View>
        <ProductInfo product={product} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default ProductInfoEdit;

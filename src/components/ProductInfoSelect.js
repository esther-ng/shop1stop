import React, { Component } from 'react';
import _ from 'lodash';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { productMatchUpdate } from '../actions';
import ProductInfo from './ProductInfo';

class ProductInfoSelect extends Component {

  onRowPress() {
    console.log(this.props);
    const { product } = this.props;
    this.props.productMatchUpdate(product);
    // Actions.selectMatch();
  }


  render() {
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

const mapStateToProps = state => {
  console.log(state);
  const { selected } = state;

  return { selected };
};


export default connect(mapStateToProps, { productMatchUpdate })(ProductInfoSelect);

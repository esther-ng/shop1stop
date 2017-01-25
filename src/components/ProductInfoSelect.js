import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { productMatchUpdate } from '../actions';
import ProductInfo from './ProductInfo';

class ProductInfoSelect extends Component {

  onRowPress() {
    const { product } = this.props;
    this.props.productMatchUpdate(product);
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
  const { selected } = state;

  return { selected };
};


export default connect(mapStateToProps, { productMatchUpdate })(ProductInfoSelect);

import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ProductInfo from './ProductInfo';

class ProductInfoEdit extends Component {

  onRowPress() {
    const { item, product } = this.props;
    if (product.store_id === 1) {
      Actions.selectMatch({ storeID: 1, title: 'QFC Selection', listItem: item });
    } else {
      Actions.selectMatch({ storeID: 2, title: 'Safeway Selection', listItem: item });
    }
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

export default ProductInfoEdit;

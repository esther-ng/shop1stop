import React, { Component } from 'react';
import _ from 'lodash';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { productMatchUpdate } from '../actions';

class ProductInfo extends Component {

  onRowPress() {
    console.log(this.props);
    const { product } = this.props;
    this.props.productMatchUpdate(product);
    Actions.selectMatch();
  }

  render() {
    const { name, sale_price, conditions, description, img_url, store_id, valid_from, valid_til } = this.props.product;

    return (
      <TouchableHighlight
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>

            <Image
              style={styles.thumbnailStyle}
              source={{ uri: img_url }}
            />
            <Text style={styles.itemStyle}>
              {name}
            </Text>
            <Text style={styles.itemStyle}>
              {sale_price}
            </Text>
            <Text style={styles.itemStyle}>
              {conditions}
            </Text>
            <Text style={styles.itemStyle}>
              {description}
            </Text>
            <Text style={styles.itemStyle}>
              {valid_from} - {valid_til}
            </Text>
          </CardSection>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  itemStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

const mapStateToProps = state => {
  console.log(state);
  const { selected } = state;

  return { selected };
};


export default connect(mapStateToProps, { productMatchUpdate })(ProductInfo);

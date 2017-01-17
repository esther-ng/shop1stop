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
    // Actions.selectMatch();
  }

  render() {
    console.log(this.props.product);
    const { name, sale_price, conditions, description, img_url, store_id, valid_from, valid_til } = this.props.product;

    const store = (store_id === 1) ? 'QFC' : 'Safeway';

    return (
      <TouchableHighlight
        onPress={this.onRowPress.bind(this)}
      >

          <View>
            <CardSection>
              <View style={styles.column}>
              <Text>{store}</Text>
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
              ${sale_price/100.00} ({conditions})
              </Text>
              <Text style={styles.detailStyle}>
              {description}
              </Text>
              <Text style={styles.detailStyle}>
              Valid {valid_from.substring(0,10)} - {valid_til.substring(0,10)}
              </Text>
              </View>
            </CardSection>
          </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15
  },
  detailStyle: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15
  },
  textContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  column: {
    flexDirection: 'column'
  }
};

const mapStateToProps = state => {
  console.log(state);
  const { selected } = state;

  return { selected };
};


export default connect(mapStateToProps, { productMatchUpdate })(ProductInfo);

import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, Picker, View } from 'react-native';
import { Confirm, Button, Card, CardSection } from './common';
import { productMatchesFetch, productMatchCreate } from '../actions';
import ProductInfo from './ProductInfo';

class SelectMatch extends Component {

  componentWillMount() {
    const { listItem, storeID } = this.props;
    // console.log(listItem);
    this.props.productMatchesFetch({ listItem, storeID });
    // console.log(this.props.products);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onButtonPress() {
    const { listItem, selected, list } = this.props;
    this.props.productMatchCreate({ listItem, selected, list });
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
      // sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  renderRow(product) {
    return <ProductInfo product={product} />;
  }

  renderSelection() {
    // console.log(this.props);
    if (this.props.selected.name && this.props.selected !== null) {
      return (
        <Card>
          <Text>Selected:</Text>
          <ProductInfo product={this.props.selected} />
        </Card>
      );
    } else {
      return (<Text style={styles.textStyle}>No Selection Made</Text>);
    }
  }

  render() {
    console.log(this.props);
    if (this.props.error) {
      return (
        <Text style={styles.textStyle}>{this.props.error}</Text>
      );
    } else {
      if (this.props.products.length > 0) {
        return (
          <View>
          <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          // renderSectionHeader={this.renderSectionHeader}
          />
          {this.renderSelection()}
          <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
          Save Selection
          </Button>
          </CardSection>
          </View>
        );
      }
    }
    return <Text style={styles.textStyle}>No Matches Found</Text>;
  }
}

const styles = {
  textStyle: {
    marginLeft: 15
  }
};

const mapStateToProps = state => {
  console.log(state);
  const products = _.map(state.products, (val) => {
    return { ...val };
  });
  const { selected, list } = state;
  const { error } = state.products;

  return { products, selected, list, error };
};

export default connect(mapStateToProps, { productMatchesFetch, productMatchCreate })(SelectMatch);

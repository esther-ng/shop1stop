import React, { Component } from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { storeListFetch } from '../actions';
import { Card, Button, CardSection } from './common';
import ProductInfo from './ProductInfo';

class StoreListView extends Component {
  componentWillMount() {
    // const { list } = this.props;
    // this.props.storeListFetch({ list });
    this.createDataSource(this.props);
    console.log(this);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  renderRow(product) {
    console.log(product);
    return <ProductInfo product={product} />;
  }

  renderList() {
    if (this.dataSource !== undefined) {
      return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        {this.renderList()}
        <CardSection>
          <Text>Total: {this.props.total}</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(this.props);
  // console.log(state.listItems.keys);
  console.log(state);
  const { storeName } = state.compare;
  console.log(storeName);
  // const items = _.map(state.listItems);
  const products = _.map(state.listItems, storeName);
  const prices = _.map(products, 'sale_price');
  const total = _.reduce(prices, (sum, n) => {
    return sum + n;
  }, 0);

  console.log(products, total);
  return { products, total };
};

export default connect(mapStateToProps, { storeListFetch })(StoreListView);

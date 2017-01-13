import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { Confirm } from './common';
import { productMatchesFetch } from '../actions';
import ProductInfo from './ProductInfo';

class SelectMatches extends Component {

  componentWillMount() {
    const { listItem } = this.props;
    this.props.productMatchesFetch({ listItem });

    console.log(this.state);
    this.createDataSource(this.props);
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
    return <ProductInfo product={product} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
//
const mapStateToProps = state => {
  console.log(state);
  const products = _.map(state.products, (val) => {
    return { ...val };
  });

  return { products };
};

export default connect(mapStateToProps, { productMatchesFetch })(SelectMatches);

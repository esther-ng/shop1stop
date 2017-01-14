import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, Picker, View } from 'react-native';
import { Confirm } from './common';
import { productMatchesFetch, productMatchesFetchQ } from '../actions';
import ProductInfo from './ProductInfo';

class SelectMatches extends Component {

  componentWillMount() {
    const { listItem } = this.props;
    this.props.productMatchesFetch({ listItem });
    // this.props.productMatchesFetchQ({ listItem });

    console.log(this.state);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.dataSource = ds.cloneWithRowsAndSections(products);
  }

  renderRow(product) {
    return <ProductInfo product={product} />;
  }

  renderSectionHeader(sectionData, product) {
    if (product.store_id === 1) {
      return (
        <Text>QFC</Text>
      );
    } else {
      return (
        <Text>Safeway</Text>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        rednderSectionHeader={this.renderSectionHeader}
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

export default connect(mapStateToProps, { productMatchesFetch, productMatchesFetchQ })(SelectMatches);

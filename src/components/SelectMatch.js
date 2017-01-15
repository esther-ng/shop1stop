import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, Picker, View } from 'react-native';
import { Confirm, Button, Card, CardSection } from './common';
import { productMatchesFetch, productMatchesFetchQ } from '../actions';
import ProductInfo from './ProductInfo';

class SelectMatches extends Component {

  componentWillMount() {
    const { listItem, storeID } = this.props;
    this.props.productMatchesFetch({ listItem, storeID });
    // this.props.productMatchesFetchQ({ listItem });

    console.log(this.state);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
      // sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  onButtonPress() {

  }

  renderRow(product) {
    return <ProductInfo product={product} />;
  }

  renderSelection() {
    console.log(this.props);
    if (this.props.selected !== {}) {
      return (
        <Card>
          <Text>Selected:</Text>
          <ProductInfo product={this.props.selected} />
        </Card>
      );
    } else {
      return (<Text>No Selection Made</Text>);
    }
  }

  render() {
    console.log(this.props);
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
//
const mapStateToProps = state => {
  console.log(state);
  const products = _.map(state.products, (val) => {
    return { ...val };
  });
  const { selected, listItem } = state;

  return { products, selected, listItem };
};

export default connect(mapStateToProps, { productMatchesFetch, productMatchesFetchQ })(SelectMatches);

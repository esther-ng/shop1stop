import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, Picker, View } from 'react-native';
import { Confirm, Button, Card, CardSection, Separator } from './common';
import { productMatchesFetch, productMatchCreate } from '../actions';
import ProductInfo from './ProductInfo';

class SelectMatch extends Component {

  componentWillMount() {
    const { listItem, storeID } = this.props;
    console.log(listItem);
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
    console.log(this.props);
    const { listItem, storeID } = this.props;
    const store = (storeID === 1) ? 'qfc' : 'safeway';

    if (this.props.selected.name && this.props.selected !== null) {
      return (
        <View>
          <Text style={styles.textStyle}>Selected:</Text>
          <ProductInfo product={this.props.selected} />
        </View>
      );
    } else if (listItem[store]) {
      return (
        <View>
          <Text style={styles.textStyle}>Selected:</Text>
          <ProductInfo product={this.props.listItem[store]} />
        </View>
      );
    } else {
      return (<Text style={styles.textStyle}>No Selection Made</Text>);
    }
  }

  renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
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
          renderSeparator={this.renderSeparator}
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
    paddingLeft: 15,
    backgroundColor: '#3BA99C',
    color: '#FDFCF2'
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

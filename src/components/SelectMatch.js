import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Button, CardSection, Spinner } from './common';
import { productMatchesFetch, productMatchCreate, productMatchesReset, productMatchAdd }
from '../actions';
import ProductInfoSelect from './ProductInfoSelect';

class SelectMatch extends Component {

  componentWillMount() {
    const { listItem, storeID } = this.props;
    this.props.productMatchAdd();
    this.props.productMatchesFetch({ listItem, storeID });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUnmount() {
    this.props.productMatchesReset();
  }

  onButtonPress() {
    const { listItem, selected, list } = this.props;
    this.props.productMatchCreate({ listItem, selected, list });
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  renderRow(product) {
    return <ProductInfoSelect product={product} />;
  }

  renderSelection() {
    const { listItem, storeID } = this.props;
    const store = (storeID === 1) ? 'qfc' : 'safeway';

    if (this.props.selected.name && this.props.selected !== null) {
      return (
        <View>
          <Text style={styles.textStyle}>Selected:</Text>
          <ProductInfoSelect product={this.props.selected} />
        </View>
      );
    } else if (listItem[store]) {
      return (
        <View>
          <Text style={styles.textStyle}>Selected:</Text>
          <ProductInfoSelect product={this.props.listItem[store]} />
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
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    if (this.props.error) {
      return (
        <Text style={styles.textStyle}>{this.props.error}</Text>
      );
    } else {
      if (this.props.products !== {}) {
        return (
          <View>
          <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
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
    fontSize: 16,
    paddingLeft: 15,
    paddingBottom: 2,
    backgroundColor: '#3BA99C',
    color: '#FDFCF2'
  }
};

const mapStateToProps = state => {
  const products = _.map(state.products.products, (val) => {
    return { ...val };
  });
  const { selected, list } = state;
  const { error, loading } = state.products;

  return { products, selected, list, error, loading };
};

export default connect(mapStateToProps,
  { productMatchesFetch, productMatchCreate, productMatchesReset, productMatchAdd }
)(SelectMatch);

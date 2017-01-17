import React, { Component } from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate, listItemAdd, compareProducts } from '../actions';
import { Card, Button, CardSection } from './common';
import ListItem from './ListItem';
import ProductInfo from './ProductInfo';

class ShoppingListView extends Component {
  componentWillMount() {
    const { list } = this.props;
    this.props.listItemsFetch({ list });
    this.createDataSource(this.props);
    console.log(this);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onAddAnother() {
    // re-render?? or does componentWillReceiveProps do this? then just save?
    console.log(this.props);
    this.props.listItemAdd(this.props.list);
  }

  onCompare() {
    this.props.compareProducts(this.props.items);
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow(listItem) {
    console.log(listItem);
    if (listItem.safeway && listItem.qfc) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <Text style={{ marginLeft: 10 }}>QFC</Text>
          <ProductInfo product={listItem.qfc} />
          <Text style={{ marginLeft: 10 }}>Safeway</Text>
          <ProductInfo product={listItem.safeway} />
        </View>
      );
    } else if (listItem.safeway) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <Text style={{ marginLeft: 10 }}>QFC</Text>
          <Text>Not Selected</Text>
          <Text style={{ marginLeft: 10 }}>Safeway</Text>
          <ProductInfo product={listItem.safeway} />
        </View>
      );
    } else if (listItem.qfc) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <Text style={{ marginLeft: 10 }}>QFC</Text>
          <ProductInfo product={listItem.qfc} />
          <Text style={{ marginLeft: 10 }}>Safeway: Not Selected</Text>
        </View>
      );
    }
    return <ListItem listItem={listItem} />;
  }


  // renderSafeway(listItem) {
  //
  //   return <Text>Select Safeway Match</Text>;
  // }
  //
  // renderQFC(listItem) {
  //
  //   return <Text>Select QFC Match</Text>;
  // }


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
    const { qtyStyle, itemStyle, totalStyle } = styles;
    return (
      <View>
        {this.renderList()}
        <CardSection>
          <Text style={totalStyle}>QFC Total: ${this.props.qfcTotal/100.00}</Text>
          <Text style={totalStyle}>Safeway Total: ${this.props.safewayTotal/100.00}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  qtyStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1
  },
  itemStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 4
  },
  totalStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 2
  }
};

const mapStateToProps = (state) => {
  // console.log(this.props);
  // console.log(state.listItems.keys);
  console.log(state);
  // const { listItems } = state;
  const items = _.map(state.listItems.listItems, (val, uid) => {
    return { ...val, uid };
  });
  const { qfcTotal, safewayTotal } = state.listItems;
  console.log({ items });
  return { items, qfcTotal, safewayTotal };
};

export default connect(mapStateToProps, { listItemsFetch, listItemCreate, listItemAdd, compareProducts })(ShoppingListView);

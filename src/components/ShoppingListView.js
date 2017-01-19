import React, { Component } from 'react';
import _ from 'lodash';
// import { Actions } from 'react-native-router-flux';
import { View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate, listItemAdd, compareProducts } from '../actions';
import { Button, CardSection } from './common';
import ListItem from './ListItem';
import ProductInfo from './ProductInfo';

class ShoppingListView extends Component {
  componentWillMount() {
    const { list } = this.props;
    this.props.listItemsFetch({ list });
    this.createDataSource(this.props);
    // console.log(this);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onAddAnother() {
    // re-render?? or does componentWillReceiveProps do this? then just save?
    // console.log(this.props);
    this.props.listItemAdd(this.props.list);
  }

  onCompare() {
    this.props.compareProducts(this.props.items);
  }

  pickQFC() {
    console.log(this);
    const listItem = this;
    console.log(listItem);
    Actions.selectMatch({ storeID: 1, title: 'QFC Selection', listItem });
  }

  pickSafeway() {
    console.log(this);
    const listItem = this;
    console.log(listItem);
    Actions.selectMatch({ storeID: 2, title: 'Safeway Selection', listItem });
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow = (listItem) => {
    // console.log(listItem);
    if (listItem.safeway && listItem.qfc) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <ProductInfo product={listItem.qfc} />
          <ProductInfo product={listItem.safeway} />
        </View>
      );
    } else if (listItem.safeway) {
      return (
        <View>
          <ListItem listItem={listItem} />
           <Button onPress={this.pickQFC.bind(listItem)}>Pick QFC Match</Button>
          <ProductInfo product={listItem.safeway} />
        </View>
      );
    } else if (listItem.qfc) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <ProductInfo product={listItem.qfc} />
           <Button onPress={this.pickSafeway.bind(listItem)}>Pick Safeway Match</Button>
        </View>
      );
    }
    return (
      <View>
         <ListItem listItem={listItem} />
         <CardSection>
           <Button onPress={this.pickQFC.bind(listItem)}>Pick QFC Match</Button>
           <Button onPress={this.pickSafeway.bind(listItem)}>Pick Safeway Match</Button>
         </CardSection>
      </View>
    );
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
    // console.log(this.props);
    const { totalStyle } = styles;
    return (
      <View>
        {this.renderList()}
        <CardSection>
          <Text style={totalStyle}>QFC Total: ${this.props.qfcTotal}</Text>
          <Text style={totalStyle}>Safeway Total: ${this.props.safewayTotal}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  totalStyle: {
    fontSize: 16,
    paddingLeft: 10,
    flex: 2,
    color: 'black',
    fontWeight: 'bold'
  }
};

const mapStateToProps = (state) => {
  // console.log(this.props);
  // console.log(state.listItems.keys);
  // console.log(state);
  // const { listItems } = state;
  const items = _.map(state.listItems.listItems, (val, uid) => {
    return { ...val, uid };
  });
  const { qfcTotal, safewayTotal } = state.listItems;
  // console.log({ items });
  return { items, qfcTotal, safewayTotal };
};

export default connect(mapStateToProps,
  { listItemsFetch, listItemCreate, listItemAdd, compareProducts }
)(ShoppingListView);

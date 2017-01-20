import React, { Component } from 'react';
import _ from 'lodash';
// import { Actions } from 'react-native-router-flux';
import { View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate, listItemAdd, compareProducts } from '../actions';
import { Button, CardSection, Separator } from './common';
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
          <ProductInfo product={listItem.qfc} item={listItem} />
          <Separator />
          <ProductInfo product={listItem.safeway} item={listItem} />
        </View>
      );
    } else if (listItem.safeway) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <CardSection>
          <Button
            onPress={this.pickQFC.bind(listItem)}
            textColor="#2F6690"
            borderColor="#2F6690"
          >
            Pick QFC Match
          </Button>
          </CardSection>
          <ProductInfo product={listItem.safeway} item={listItem} />
        </View>
      );
    } else if (listItem.qfc) {
      return (
        <View>
          <ListItem listItem={listItem} />
          <ProductInfo product={listItem.qfc} item={listItem} />
          <CardSection>
          <Button
            onPress={this.pickSafeway.bind(listItem)}
            textColor="#DF2935"
            borderColor="#DF2935"
          >
            Pick Safeway Match
          </Button>
          </CardSection>
        </View>
      );
    }
    return (
      <View>
         <ListItem listItem={listItem} />
         <CardSection>
            <Button
              onPress={this.pickQFC.bind(listItem)}
              textColor="#2F6690"
              borderColor="#2F6690"
            >
              Pick QFC Match
            </Button>
            <Button
              onPress={this.pickSafeway.bind(listItem)}
              textColor="#DF2935"
              borderColor="#DF2935"
            >
              Pick Safeway Match
            </Button>
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
          renderSeparator={this.renderSeparator}
          renderFooter={this.renderFooter}
        />
      );
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

  renderNote() {
    if (this.props.items.length === 0) {
      return <Text style={{ fontSize: 20, padding: 30, textAlign: 'center' }}>Add items by clicking the + on the right side of the navbar.</Text>;
    }
  }

  render() {
    // console.log(this.props);
    const { totalStyle, totalContainer } = styles;
    return (
      <View>
        {this.renderList()}
        {this.renderNote()}
        <View style={totalContainer}>
          <Text style={totalStyle}>QFC Total: ${this.props.qfcTotal}</Text>
          <Text style={totalStyle}>Safeway Total: ${this.props.safewayTotal}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  totalStyle: {
    fontSize: 16,
    padding: 8,
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#3BA99C'
  },
  totalContainer: {
    flexDirection: 'row',
    // borderColor: '#ddd',
    position: 'relative',
    // bottom: 0,
    backgroundColor: '#3BA99C',
    margin: 0
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

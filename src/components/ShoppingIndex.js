import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
// import { Confirm } from './common';
import { shoppingListsFetch } from '../actions';
import ShoppingListRow from './ShoppingListRow';

class ShoppingIndex extends Component {

  componentWillMount() {
    this.props.shoppingListsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ lists }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(lists);
  }

  ifEmpty() {
    if (this.props.lists.length === 0) {
      return (
        <Text
          style={{
            fontSize: 20,
            padding: 30,
            textAlign: 'center' }}
        >
          Create a new list by clicking the + on the right side of the navbar.
        </Text>
      );
    }
  }

  renderRow(list) {
    return <ShoppingListRow list={list} />;
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
    console.log(this.props.lists);
    return (
      <View>
      {this.ifEmpty()}
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const lists = _.map(state.lists, (val, uid) => {
    return { ...val, uid };
  });

  return { lists };
};

export default connect(mapStateToProps, { shoppingListsFetch })(ShoppingIndex);

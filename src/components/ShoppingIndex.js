import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { shoppingListsFetch } from '../actions';
import ShoppingList from './ShoppingList';

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

  renderRow(list) {
    return <ShoppingList list={list} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
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

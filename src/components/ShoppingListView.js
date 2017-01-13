import React, { Component } from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate, listItemAdd } from '../actions';
import { Card, Button, CardSection } from './common';
import ListItem from './ListItem';

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
    this.props.listItemAdd();
    Actions.addItemForm({ list: this.props.list });
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow(listItem) {
    console.log(listItem);
    return <ListItem listItem={listItem} />;
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
    console.log(this.props);
    const { qtyStyle, itemStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Text style={qtyStyle}>Qty</Text>
          <Text style={itemStyle}>Item</Text>
        </CardSection>
        {this.renderList()}
        <CardSection>
          <Button
            onPress={this.onAddAnother.bind(this)}>
            Add Item
          </Button>
        </CardSection>
      </Card>
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
  }
};

const mapStateToProps = (state) => {
  console.log(this.props);
  console.log(state.listItems);
  console.log(state);
  const items = _.map(state.listItems, (val, uid) => {
    return { ...val, uid };
  });
  console.log({ items });
  return { items };
};

export default connect(mapStateToProps, { listItemsFetch, listItemCreate, listItemAdd })(ShoppingListView);

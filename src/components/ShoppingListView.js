import React, { Component } from 'react';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate } from '../actions';
import { Card, CardSection } from './common';
import ListItem from './ListItem';

class ShoppingListView extends Component {
  componentWillMount() {
    console.log(this);
    const { list } = this.props;
    this.props.listItemsFetch({ list });
    console.log('inside component mount' + this.props);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onAddAnother() {
    // re-render?? or does componentWillReceiveProps do this? then just save?
    console.log(this.props);
    Actions.addItemForm({ list: this.props.list });
  }

  createDataSource({ items }) {
    if (items) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(items);
    }
  }

  renderRow(listItem) {
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
    return (
      <Card>
        {this.renderList()}
        <CardSection>
          <Button
            onPress={this.onAddAnother.bind(this)}
            title="Add Item"
          />
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
// };

const mapStateToProps = (state) => {
  console.log(this.props);
  console.log(state.listItems);
  console.log(state);
  const items = _.map(state.listItems, (val) => {
    return { ...val };
  });

  return { items };
};

export default connect(mapStateToProps, { listItemsFetch, listItemCreate })(ShoppingListView);
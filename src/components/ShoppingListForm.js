import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch } from '../actions';
import { Card, CardSection, Input } from './common';
import ListItemForm from './ListItemForm';

class ShoppingListForm extends Component {
  componentWillMount() {
    this.props.listItemsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onAddAnother() {
    // re-render?? or does componentWillReceiveProps do this? then just save?
  }

  createDataSource({ listItems }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(listItems);
  }

  renderRow(listItem) {
    return <ListItemForm listItem={listItem} />;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="List Name"
            placeholder="Potluck"
            value={this.props.name}
            onChangeText={value => this.props.shoppingListUpdate({ prop: 'list_name', value })}
          />
        </CardSection>

        <CardSection>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </CardSection>

        <CardSection>
          <ListItemForm />
        </CardSection>
        <CardSection>
          <Button onPress={this.onAddAnother.bind(this)}>Save & Add Another</Button>
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
// };

const mapStateToProps = (state) => {
  const listItems = _.map(state.listItems, (val, uid) => {
    return { ...val, uid };
  });
  return { listItems };
};

export default connect(mapStateToProps, { listItemsFetch })(ShoppingListForm);

import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch, listItemCreate, listItemUpdate } from '../actions';
import { Card, CardSection, Input } from './common';
import ListItemForm from './ListItemForm';

class ShoppingListForm extends Component {
  componentWillMount() {
    const { uid } = this.props.list;
    this.props.listItemsFetch({ uid });
    console.log(this.props);
    this.createDataSource(this.props.list);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onAddAnother() {
    console.log(this);
    // re-render?? or does componentWillReceiveProps do this? then just save?
    const { item, quantity, list } = this.props;
    this.props.listItemCreate({ item, quantity, uid: list.uid });
  }

  createDataSource({ listitems }) {
    if (listitems) {      
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(listitems);
    }
  }

  renderList() {
    console.log(this.dataSource);
    if (this.dataSource !== undefined) {
      return (
        <CardSection>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </CardSection>
      );
    }
  }

  renderRow(listItem) {
    return <ListItemForm listItem={listItem} />;
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="List Name"
            placeholder="Potluck"
            value={this.props.list.name}
            onChangeText={value => this.props.shoppingListUpdate({ prop: 'list_name', value })}
          />
        </CardSection>
        {this.renderList()}
        <ListItemForm />
        <CardSection>
          <Button
            onPress={this.onAddAnother.bind(this)}
            title="Save & Add Another"
          />
        </CardSection>
      </Card>
    );
  }
}

// const styles = {
// };

const mapStateToProps = (state) => {
  // const item = state.listItem;
  return state.listItem;
};

export default connect(mapStateToProps, { listItemsFetch, listItemCreate })(ShoppingListForm);

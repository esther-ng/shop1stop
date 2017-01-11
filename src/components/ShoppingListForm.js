import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listItemsFetch } from '../actions';
import { Card, CardSection, Input } from './common';
import ListItemForm from './ListItemForm';

class ShoppingListForm extends Component {
  // componentWillMount() {
  //   console.log(this.props);
  //   this.props.listItemsFetch();
  //
  //   this.createDataSource(this.props);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps);
  // }

  onAddAnother() {
    // re-render?? or does componentWillReceiveProps do this? then just save?
  }

  // createDataSource({ listItems }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(listItems);
  // }

  renderList() {
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
            value={this.props.name}
            onChangeText={value => this.props.shoppingListUpdate({ prop: 'list_name', value })}
          />
        </CardSection>
        {// {this.renderList()}
        }
        <CardSection>
          <ListItemForm />
        </CardSection>
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
  console.log(state);
  const listItems = _.map(state.listItems, (val, uid) => {
    return { ...val, uid };
  });
  return { listItems };
};

export default connect(mapStateToProps, { listItemsFetch })(ShoppingListForm);

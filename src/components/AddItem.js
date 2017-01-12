import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listItemUpdate, listItemCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ListItemForm from './ListItemForm';

class AddItem extends Component {
  onButtonPress() {
    console.log(this.props);
    const { quantity, item, list } = this.props;
    // pass list id

    this.props.listItemCreate({ quantity, item, list });
  }

  render() {
    return (
      <Card>
        <ListItemForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(this.props);
  console.log(state.listItems);
  console.log(state);
  const { list } = state;
  const { item, quantity } = state.listItem;

  return { item, quantity, list };
};

export default connect(mapStateToProps, {
  listItemUpdate, listItemCreate
})(AddItem);
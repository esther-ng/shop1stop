import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { listItemUpdate, listItemSave } from '../actions';
import { Card, CardSection, Button } from './common';
import ListItemForm from './ListItemForm';

class EditItem extends Component {

  componentWillMount() {
    _.each(this.props.listItem, (value, prop) => {
      this.props.listItemUpdate({ prop, value });
    });
  }

  onButtonPress() {
    console.log(this.props);
    const { quantity, item, list } = this.props;
    const { uid } = this.props.listItem;
    // pass list id

    this.props.listItemSave({ quantity, item, uid, list });
  }

  render() {
    return (
      <Card>
        <ListItemForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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
  listItemUpdate, listItemSave
})(EditItem);

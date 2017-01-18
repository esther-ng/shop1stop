import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { listItemUpdate, listItemSave, listItemDelete } from '../actions';
import { Confirm, Card, CardSection, Button } from './common';
import ListItemForm from './ListItemForm';

class EditItem extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.listItem, (value, prop) => {
      this.props.listItemUpdate({ prop, value });
    });
  }

  onButtonPress() {
    // console.log(this.props);
    const { quantity, item, list } = this.props;
    const { uid } = this.props.listItem;
    // pass list id

    this.props.listItemSave({ quantity, item, uid, list });
  }

  onAccept() {
    console.log(this.props);
    const { listItem, list } = this.props;

    this.props.listItemDelete({ listItem, list });
  }

  onDecline() {
    this.setState({ showModal: false });
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
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Item
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(this.props);
  // console.log(state.listItems);
  // console.log(state);
  const { list } = state;
  const { item, quantity } = state.listItem;

  return { item, quantity, list };
};

export default connect(mapStateToProps, {
  listItemUpdate, listItemSave, listItemDelete
})(EditItem);

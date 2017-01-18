import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
// import EmployeeForm from './EmployeeForm';
import { shoppingListUpdate, shoppingListSave, shoppingListDelete } from '../actions';
import { Input, Card, CardSection, Button, Confirm } from './common';

class ShoppingListEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.list, (value, prop) => {
      this.props.shoppingListUpdate({ prop, value });
    });
  }

  onButtonPress() {
    // console.log(this.props);
    const { name } = this.props;
    this.props.shoppingListSave({ name, uid: this.props.list.uid });
  }

  // onTextPress() {
  //   const { phone, shift } = this.props;
  //
  //   Communications.text(phone, `Your upcoming shift is on ${shift}`);
  // }

  onAccept() {
    const { uid } = this.props.list;

    this.props.shoppingListDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="List Name"
            placeholder="Potluck"
            value={this.props.name}
            onChangeText={value => this.props.shoppingListUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete List
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
  // console.log(state);
  const { name, phone, shift } = state.list;

  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { shoppingListUpdate, shoppingListSave, shoppingListDelete }
)(ShoppingListEdit);

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ShoppingListForm from './ShoppingListForm';

class ShoppingListCreate extends Component {
  // onButtonPress() {
  //   const { name, phone, shift } = this.props;
  //
  //   this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  // }

  render() {
    return (
      <Card>
        <ShoppingListForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;
//
//   return { name, phone, shift };
// };

export default ShoppingListCreate;

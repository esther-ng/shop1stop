import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shoppingListUpdate, shoppingListCreate, shoppingListIndex } from '../actions';
import { Card, CardSection, Button, Input } from './common';
// import ShoppingListForm from './ShoppingListForm';

class ShoppingListCreate extends Component {
  componentWillMount() {
    this.props.shoppingListIndex();
    console.log(this);
  }

  onButtonPress() {
    const { name } = this.props;

    this.props.shoppingListCreate({ name });
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
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { name } = state.list;

  return { name };
};

export default connect(mapStateToProps,
  { shoppingListUpdate, shoppingListCreate, shoppingListIndex }
)(ShoppingListCreate);

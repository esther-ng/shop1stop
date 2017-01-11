import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { listItemUpdate } from '../actions';
import { CardSection, Input } from './common';

class ListItemForm extends Component {
  render() {
    const { quantity, item } = this.props.listItem;

    return (
      <View>
        <CardSection>
          <Input
            label="Quantity"
            placeholder="2"
            value={quantity}
            onChangeText={value => this.props.listItemUpdate({ prop: 'quantity', value })}
          />
          <Input
          label="Item"
          placeholder="cookies"
          value={item}
          onChangeText={value => this.props.listItemUpdate({ prop: 'item', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
};

const mapStateToProps = (state) => {
  const { quantity, item } = state.listItemForm;
  return { quantity, item };
};

export default connect(mapStateToProps, { listItemUpdate })(ListItemForm);

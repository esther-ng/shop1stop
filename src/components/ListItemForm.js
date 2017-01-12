import React, { Component } from 'react';
import _ from 'lodash';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { listItemUpdate } from '../actions';
import { CardSection, Input } from './common';

class ListItemForm extends Component {
  componentWillMount() {
    _.each(this.props.listItem, (value, prop) => {
      this.props.listItemUpdate({ prop, value });
    });
  }

  render() {
    console.log(this.props);
    const { quantity, item } = this.props;

    return (
        <CardSection>
          <Picker
            style={{ flex: 1 }}
            mode='dropdown'
            selectedValue={quantity}
            onValueChange={value => this.props.listItemUpdate({ prop: 'quantity', value })}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
          </Picker>
          <Input
          style={{ flex: 5 }}
          label="Item"
          placeholder="cookies"
          value={item}
          onChangeText={value => this.props.listItemUpdate({ prop: 'item', value })}
          />
        </CardSection>
    );
  }
}

const styles = {
};

const mapStateToProps = (state) => {
  const { quantity, item } = state.listItem;
  return { quantity, item };
};

export default connect(mapStateToProps, { listItemUpdate })(ListItemForm);

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';
import { CardSection } from './common';
// import { findMatches } from '../actions';

class ListItem extends Component {
  state = {
    inCart: false
  };

  onRowPress() {
    console.log(this.props);
    Actions.editItemForm({ listItem: this.props.listItem });
  }

  onLongPress() {
    console.log(this.props);
    Actions.selectMatches({ listItem: this.props.listItem });
  }

  render() {
    const { item, quantity } = this.props.listItem;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
        onLongPress={this.onLongPress.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.qtyStyle}>
              Qty: {quantity}
            </Text>
            <Text style={styles.itemStyle}>
              Item: {item}
            </Text>
            <Switch
              onValueChange={(value) => this.setState({ inCart: value })}
              value={this.state.inCart}
            />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  qtyStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1
  },
  itemStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 4
  }
};

export default ListItem;

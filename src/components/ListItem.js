import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  state = {
    inCart: false
  };

  onRowPress() {
    Actions.editItemForm({ listItem: this.props.listItem });
  }

  render() {
    const { item, quantity } = this.props.listItem;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View style={styles.containerStyle}>
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
    paddingLeft: 10,
    flex: 1,
    color: '#FDFCF2'
  },
  itemStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 4,
    color: '#FDFCF2'
  },
  containerStyle: {
    backgroundColor: '#3BA99C'
  }
};

export default ListItem;

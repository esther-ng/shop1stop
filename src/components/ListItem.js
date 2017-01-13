import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    console.log(this.props);
    Actions.editItemForm({ listItem: this.props.listItem });
  }

  deleteOnLong() {

  }

  render() {
    const { item, quantity } = this.props.listItem;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
        onLongPress={this.deleteOnLong.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.qtyStyle}>
              {quantity}
            </Text>
            <Text style={styles.itemStyle}>
              {item}
            </Text>
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

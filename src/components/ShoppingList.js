import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ShoppingList extends Component {

  onRowPress() {
    console.log(this.props.list);
    Actions.shoppingListForm({ list: this.props.list });
  }

  deleteOnLong() {

  }

  render() {
    const { name } = this.props.list;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
        onLongPress={this.deleteOnLong.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ShoppingList;

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    console.log(this.props);
    Actions.editItem({ listItem: this.props.listItem });
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
            <Text style={styles.titleStyle}>
              {quantity}{item}
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

export default ListItem;

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { shoppingListView, shoppingListEdit } from '../actions';

class ShoppingListRow extends Component {

  onRowPress() {
    console.log(this.props.list);
    const { name, uid, listItems } = this.props.list;
    this.props.shoppingListView({ name, uid, listItems });
  }

  editOnLong() {
    const { name, uid } = this.props.list;
    this.props.shoppingListEdit({ name, uid });
  }

  render() {
    const { name } = this.props.list;

    return (
      <TouchableHighlight
        onPress={this.onRowPress.bind(this)}
        onLongPress={this.editOnLong.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps, { shoppingListView, shoppingListEdit })(ShoppingListRow);

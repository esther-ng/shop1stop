import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import SelectMatch from './SelectMatch';

class SelectMatches extends Component {


  onQpress() {
    const { listItem } = this.props;
    Actions.selectMatch({ storeID: 1, title: 'QFC Selection', listItem });
  }

  onSpress() {
    const { listItem } = this.props;
    Actions.selectMatch({ storeID: 2, title: 'Safeway Selection', listItem });
  }

  renderQFC() {
    if (this.props) {
      return (
        <Button onPress={this.onQpress.bind(this)}>
          Pick QFC Match
        </Button>
      );
    }
  }

  renderSafeway() {
    if (this.props) {
      return (
        <Button onPress={this.onSpress.bind(this)}>
          Pick Safeway Match
        </Button>
      );
    }
  }

  render() {
    console.log(this.props);
    const { item } = this.props.listItem;
    return (
      <Card>
        <CardSection>
          <Text>Now Matching: { item }</Text>
        </CardSection>
        <CardSection>
          {this.renderQFC()}
        </CardSection>
        <CardSection>
          {this.renderSafeway()}
        </CardSection>
      </Card>
    );
  }
}

export default SelectMatches;

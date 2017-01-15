import React, { Component } from 'react';
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

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onQpress.bind(this)}>
            Pick QFC Match
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onSpress.bind(this)}>
            Pick Safeway Match
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default SelectMatches;

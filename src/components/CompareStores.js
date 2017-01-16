import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { seeStore } from '../actions';
import { Card, CardSection, Button } from './common';

class CompareStores extends Component {
  selectQFC() {
    this.props.seeStore({ storeName: 'qfc', listItems: this.props.listItems });
  }

  selectSafeway() {
    this.props.seeStore({ storeName: 'safeway', listItems: this.props.listItems });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.selectQFC.bind(this)}>
            Shop@QFC
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.selectSafeway.bind(this)}>
            Shop@Safeway
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(this.props);
  // console.log(state.listItems.keys);
  console.log(state);
  const { listItems } = state;

  return { listItems };
};

export default connect(mapStateToProps, { seeStore })(CompareStores);

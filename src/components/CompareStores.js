import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { listItemCreate } from '../actions';
import { Card, CardSection, Button } from './common';

class CompareStores extends Component {
  selectQFC() {
    
  }

  render() {
    return (
      <Button onPress={this.selectQFC}>
        Shop@QFC
      </Button>
    );
  }
}

export default CompareStores;

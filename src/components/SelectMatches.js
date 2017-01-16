import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import { productMatchFetch } from '../actions';
// import SelectMatch from './SelectMatch';
import ProductInfo from './ProductInfo';

class SelectMatches extends Component {

  componentWillMount() {
    const { listItem } = this.props;
    console.log(listItem);
    this.props.productMatchFetch({ listItem });
    // this should fetch selections so they may render if they exist, also, add callback as param for product info instead of having it hard coded.
    // this.props.productMatchesFetchQ({ listItem });
  }

  onQpress() {
    const { listItem } = this.props;
    Actions.selectMatch({ storeID: 1, title: 'QFC Selection', listItem });
  }

  onSpress() {
    const { listItem } = this.props;
    Actions.selectMatch({ storeID: 2, title: 'Safeway Selection', listItem });
  }

  renderQFC() {
    if (this.props[1]) {
      return (
        <ProductInfo product={this.props[1]} />
      );

    } else {
      return (
        <Button onPress={this.onQpress.bind(this)}>
        Pick QFC Match
        </Button>
      );
    }
  }

  renderSafeway() {
    if (this.props[2]) {
      return (
        <ProductInfo product={this.props[2]} />
      );

    } else {
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

export default connect(null, { productMatchFetch })(SelectMatches);

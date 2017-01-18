import React, { Component } from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import ProductInfo from './ProductInfo';
import { productMatchUpdate } from '../actions';

class ProductMatchForm extends Component {

  setSelectedOption(selectedOption) {
    this.props.productMatchUpdate({ prop: 'safeway', value: selectedOption });
  }

  renderOption(option, selected, onSelect, index) {
    // const style = selected ? { fontWeight: 'bold' } : {};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <ProductInfo product={option} />
      </TouchableWithoutFeedback>
    );
  }

  renderContainer(optionNodes) {
    return <View>{optionNodes}</View>;
  }

  render() {
    const options = this.props.products;


    return (
      <View style={{ margin: 20 }}>
        <RadioButtons
          options={options}
          onSelection={this.setSelectedOption.bind(this)}
          selectedOption={this.selectedOption}
          renderOption={this.renderOption}
          renderContainer={this.renderContainer}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  const { safeway, qfc, generic } = state.selected;
  return { safeway, qfc, generic };
};

export default connect(mapStateToProps, { productMatchUpdate })(ProductMatchForm);

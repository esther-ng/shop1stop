import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={style.containerStyle} >
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    padding: 5,
    paddingRight: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };

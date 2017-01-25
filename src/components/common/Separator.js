import React from 'react';
import { View } from 'react-native';

const Separator = (props) => {
  return (
    <View style={style.containerStyle} />
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'grey',
    position: 'relative'
  }
};

export { Separator };

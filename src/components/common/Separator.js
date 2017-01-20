import React from 'react';
import { View } from 'react-native';

const Separator = (props) => {
  return (
    <View style={style.containerStyle} >
    </View>
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    // padding: 5,
    // backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'grey',
    position: 'relative'
  }
};

export {Separator};

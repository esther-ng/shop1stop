import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, backColor, textColor, borderColor }) => {
  const { buttonStyle, textStyle } = styles;
  buttonStyle.backgroundColor = backColor;
  textStyle.color = textColor;
  buttonStyle.borderColor = borderColor;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, { borderColor }]}>
      <Text style={[textStyle, { color: textColor }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

let styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#007aff',
    margin: 5
  }
};

export { Button };

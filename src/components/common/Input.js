import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, textColor, autoCapitalize }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  // const labStyle = {[labelStyle, color: textColor]};
  // const inStyle = {[inputStyle, color: textColor]};
  // inputStyle.color = textColor;
  // labelStyle.color = textColor;

  return (
    <View style={containerStyle}>
      <Text style={[labelStyle, {color: textColor}]}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={textColor}
        underlineColorAndroid={textColor}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={[inputStyle, {color: textColor}]}
      />
    </View>
  );
};

let styles = {
  inputStyle: {
    // color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    // color: '#000',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

//create text input component
import React from 'react';
import {TextInput} from 'react-native';
import {colors} from '../../styles/styles';

const Input = ({
  label,
  mode,
  onChangeText,
  onBlur,
  value,
  placeholder,
  style,
}) => {
  return (
    <TextInput
      label={label}
      mode={mode}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      style={style}
      theme={{colors: {primary: colors.primary}}}
      secureTextEntry={label === 'Password' ? true : false}
    />
  );
};

export default Input;

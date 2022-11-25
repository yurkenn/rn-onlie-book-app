// create button component
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/styles';

const CustomButton = ({onPress, title, style, children}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} title={title}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default CustomButton;

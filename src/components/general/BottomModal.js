import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import Input from './Input';
const BottomModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}>
      <View style={styles.container}>
        <Input
          label="First Name"
          mode="outlined"
          placeholder="First Name"
          style={styles.input}
        />
        <Input
          label="Last Name"
          mode="outlined"
          placeholder="Last Name"
          style={styles.input}
        />
        <Input
          label="Email"
          mode="outlined"
          placeholder="Email"
          style={styles.input}
        />
        <Input
          label="Country"
          mode="outlined"
          placeholder="Country"
          style={styles.input}
          onChangeText={setText}
        />
        <CustomButton style={styles.button} onPress={() => onSend(text)}>
          Update
        </CustomButton>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    marginTop: 10,
    height: 70,
    width: 200,
  },
});

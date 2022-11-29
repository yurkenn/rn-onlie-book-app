import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from './../../components/general/BottomModal';
import CustomButton from '../../components/general/CustomButton';
import Icon from '../../components/general/ButtomIcon';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalSend = () => {};

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        setUser(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{uri: 'https://avatars.githubusercontent.com/u/69719126?v=4'}}
        />
      </View>
      <View style={styles.text_container}>
        <View style={styles.text_detail}>
          <Icon name="user" size={20} color="#000" />
          <Text style={styles.text}>First Name: Oğuz </Text>
        </View>
        <View style={styles.text_detail}>
          <Icon name="user" size={20} color="#000" />
          <Text style={styles.text}>Last Name: Yürken </Text>
        </View>
        <View style={styles.text_detail}>
          <Icon name="envelope" size={20} color="#000" />
          <Text style={styles.text}>Email: oguz.yurken@gmail.com </Text>
        </View>
        <View style={styles.text_detail}>
          <Icon name="globe" size={20} color="#000" />
          <Text style={styles.text}>Country: Turkey</Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <CustomButton style={styles.button} onPress={toggleModal}>
          Edit
        </CustomButton>
        <Modal
          visible={isModalVisible}
          onClose={handleModalClose}
          onSend={handleModalSend}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: 170,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  text_container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  text_detail: {
    flex: 1,
    flexDirection: 'row',
  },
  button_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    height: 70,
    width: 200,
  },
});

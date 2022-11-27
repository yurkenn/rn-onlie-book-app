import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeFeed = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.cover_img}} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default HomeFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
});

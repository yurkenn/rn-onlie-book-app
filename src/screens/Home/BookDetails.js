import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BookDetails = ({route}) => {
  const {item} = route.params;

  console.log('item', item);

  return (
    <View>
      <Text>BookDetails</Text>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import useApi from '../../hooks/apiRequest/useApi';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [data, loading, error, setSearchTerm] = useApi(Config.API_URL);

  console.log('data', data);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

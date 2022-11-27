import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import useApi from '../../hooks/apiRequest/useApi';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import Loading from '../../components/general/Loading';
import Error from '../../components/general/Error';
import HomeFeed from '../../components/feeds/HomeFeed';

const HomeScreen = () => {
  const [data, loading, error] = useApi(Config.API_URL);

  const bookWithCover = data.map(singleBook => {
    return {
      ...singleBook,
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : 'https://raw.githubusercontent.com/prabinmagar/booklib-app-using-react-js-and-openlib-api/master/src/images/cover_not_found.jpg',
    };
  });

  console.log('bookwithcover', bookWithCover);

  const renderItem = ({item}) => {
    return <HomeFeed item={item} />;
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={bookWithCover} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

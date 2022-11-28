import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchFeeds from '../../components/feeds/SearchFeeds';
import {removeFavorite} from '../../redux/favoriteSlice';
import BookmarkFeed from '../../components/feeds/BookmarkFeed';
const BookMarkScreen = () => {
  const favoriteBooks = useSelector(state => state.favorite.value);
  console.log('favoriteBooks', favoriteBooks);

  const renderItem = ({item}) => <BookmarkFeed item={item} />;

  if (favoriteBooks.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Bookmarks</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteBooks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default BookMarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

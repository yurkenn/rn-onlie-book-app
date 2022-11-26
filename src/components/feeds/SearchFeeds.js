import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/apiRequest/useApi';
import Config from 'react-native-config';
// https://covers.openlibrary.org/b/id/240727-S.jpg
const SearchFeeds = ({item}) => {
  //   const [data, loading, error, setSearchTerm] = useApi(Config.API_URL);

  //   const bookWithCover = data.map(singleBook => {
  //     return {
  //       ...singleBook,
  //       id: singleBook.id.replace('/works/', ''),
  //       cover_img: singleBook.cover_id
  //         ? ` https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
  //         : 'https://covers.openlibrary.org/b/id/240727-S.jpg',
  //     };
  //   });

  //   console.log('bookwithcover', bookWithCover);

  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default SearchFeeds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

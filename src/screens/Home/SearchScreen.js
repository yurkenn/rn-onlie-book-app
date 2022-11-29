import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useApi from '../../hooks/apiRequest/useApi';
import Config from 'react-native-config';
import Input from './../../components/general/Input';
import {colors} from '../../styles/styles';
import SearchFeeds from '../../components/feeds/SearchFeeds';
import BottomIcon from './../../components/general/ButtomIcon';
import Loading from './../../components/general/Loading';
import Error from './../../components/general/Error';

const SearchScreen = () => {
  const [data, loading, error, setSearchTerm] = useApi(Config.API_URL);
  const [searchText, setSearchText] = useState('');

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

  const handleSearch = () => {
    searchText === ''
      ? Alert.alert('Please enter a search term')
      : setSearchTerm(searchText);
    return setSearchText('');
  };

  const renderItem = ({item}) => {
    return <SearchFeeds item={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Input
        style={styles.searchInput}
        placeholder="Search for books here..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.search_text}>Search</Text>
        <BottomIcon name="search" size={25} color={colors.tertiary} />
      </TouchableOpacity>
      <FlatList
        data={bookWithCover}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={330}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    right: 25,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search_text: {
    fontSize: 16,
    color: colors.tertiary,
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 10,
    margin: 10,
    marginLeft: 20,
    padding: 10,
    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

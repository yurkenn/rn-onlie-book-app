import {
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
import CustomTextInput from './../../components/general/CustomTextInput';
import Icon from './../../components/general/ButtomIcon';
import {colors} from '../../styles/styles';
import SearchFeeds from '../../components/feeds/SearchFeeds';
import BottomIcon from './../../components/general/ButtomIcon';
const SearchScreen = () => {
  const [data, loading, error, setSearchTerm] = useApi(Config.API_URL);
  const [searchText, setSearchText] = useState('');
  // https://covers.openlibrary.org/b/id/10580435-L.jpg
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
    setSearchTerm(searchText);
    return setSearchText('');
  };

  const renderItem = ({item}) => {
    return <SearchFeeds item={item} />;
  };

  return (
    <View>
      <CustomTextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity onPress={handleSearch}>
        <BottomIcon name="search" size={25} color={colors.tertiary} />
      </TouchableOpacity>
      <FlatList data={bookWithCover} renderItem={renderItem} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

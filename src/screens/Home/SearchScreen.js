import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

  const handleSearch = () => {
    setSearchTerm(searchText);
    return setSearchText('');
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.first_publish_year}</Text>
        <Text>{item.edition_count}</Text>
      </View>
    );
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
      <FlatList data={data} renderItem={renderItem} />
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
  flatlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

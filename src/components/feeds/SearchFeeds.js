import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SearchFeeds = ({item}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('BookDetails', {item});
  };

  return (
    <TouchableOpacity onPress={() => handleNavigation(item.id)}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image source={{uri: item.cover_img}} style={styles.image} />
          <View style={styles.text_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>
              <Text style={styles.author_name}>Author: </Text>
              {item.author}
            </Text>
            <Text style={styles.edition}>
              <Text style={styles.edition_text}>Total Editions: </Text>
              {item.edition_count}
            </Text>
            <Text style={styles.publish}>
              <Text style={styles.publish_text}>First Publish Year: </Text>
              {item.first_publish_year}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchFeeds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    elevation: 5,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 165,
  },
  text_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author_name: {
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  edition_text: {
    fontWeight: 'bold',
  },
  edition: {
    fontSize: 16,
  },
  publish_text: {
    fontWeight: 'bold',
  },
  publish: {
    fontSize: 16,
  },
});

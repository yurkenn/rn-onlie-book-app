import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../styles/styles';

const SearchFeeds = ({item}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('BookDetails', {item});
  };

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={() => handleNavigation(item)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.cover_img}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <Text style={styles.author}>
              <Text style={styles.author_text}>Author:</Text> {item.author}
            </Text>
            <Text style={styles.edition}>
              <Text style={styles.edition_text}>Edition:</Text>{' '}
              {item.edition_count}
            </Text>
            <Text style={styles.publish}>
              <Text style={styles.publish_text}>Publish Year:</Text>{' '}
              {item.first_publish_year}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchFeeds;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 350,
    margin: 10,
  },
  textContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  author: {
    fontSize: 16,
  },
  author_text: {
    fontWeight: 'bold',
    color: colors.quaternary,
  },
  edition: {
    fontSize: 16,
  },
  edition_text: {
    fontWeight: 'bold',
    color: colors.quaternary,
  },
  publish: {
    fontSize: 16,
  },
  publish_text: {
    fontWeight: 'bold',
    color: colors.quaternary,
  },
  pressed: {
    opacity: 0.75,
  },
});

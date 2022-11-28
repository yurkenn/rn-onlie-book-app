import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {removeFavorite} from '../../redux/favoriteSlice';
import {useDispatch} from 'react-redux';

const BookmarkFeed = ({item, onSelect}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFavorite(item));
  };

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onLongPress={handleRemove}>
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

export default BookmarkFeed;

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
    borderRadius: 10,
    margin: 10,
  },
  textContainer: {
    width: 300,
    height: 100,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

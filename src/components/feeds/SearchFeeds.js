import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../redux/favoriteSlice';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const SearchFeeds = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const rStlye = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(400, withSpring(0));
      }
    });
    return dispatch(addFavorite(item));
  }, [scale, dispatch, item]);

  const handleNavigation = () => {
    navigation.navigate('BookDetails', {item});
  };

  return (
    <TapGestureHandler
      waitFor={doubleTapRef}
      onActivated={() => handleNavigation(item.id)}>
      <TapGestureHandler
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={onDoubleTap}>
        <Animated.View>
          <View style={styles.container}>
            <View style={styles.inner_container}>
              <Image source={{uri: item.cover_img}} style={styles.image} />
              <AnimatedImage
                source={require('../../assets/images/open-book.png')}
                style={[styles.heart, rStlye]}
              />
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
        </Animated.View>
      </TapGestureHandler>
    </TapGestureHandler>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 250,
  },
  text_container: {
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
  heart: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
});

// create home bottom tab navigation

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import BookMarkScreen from '../../screens/Home/BookMarkScreen';
import SearchScreen from '../../screens/Home/SearchScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="BookmarkScreen" component={BookMarkScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});

// create home bottom tab navigation

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/Home/HomeScreen';
import BookMarkScreen from '../../screens/Home/BookMarkScreen';
import SearchScreen from '../../screens/Home/SearchScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';

import BottomIcon from '../../components/general/ButtomIcon';
import {colors} from '../../styles/styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 5,
        },

        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.quinary,

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomIcon name="home" size={20} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="BookmarkScreen"
        component={BookMarkScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomIcon name="bookmark" size={20} color={color} />
          ),
          title: 'Bookmark',
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomIcon name="search" size={20} color={color} />
          ),
          title: 'Search',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomIcon name="user" size={20} color={color} />
          ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

const styles = StyleSheet.create({});

// create home bottom tab navigation

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BookMarkScreen from '../../screens/Home/BookMarkScreen';
import SearchScreen from '../../screens/Home/SearchScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';

import BottomIcon from '../../components/general/ButtomIcon';
import {colors} from '../../styles/styles';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.tertiary,
        },
        headerTintColor: colors.primary,
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

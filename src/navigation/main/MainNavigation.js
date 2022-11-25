// create main navigation with home and auth navigation

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigation from './../home/HomeNavigation';
import AuthNavigation from './../auth/AuthNavigation';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/authSlice';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const isAuth = useSelector(authSelector).isAuth;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

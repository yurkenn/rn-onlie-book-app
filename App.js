import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainNavigation from './src/navigation/main/MainNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;

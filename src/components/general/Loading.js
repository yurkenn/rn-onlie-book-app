import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie source={require('./../../assets/loading (2).json')} autoPlay loop />
  );
};

export default Loading;

import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('signin');
  }, 2000);
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="cover"
      source={require('../../assets/splash.png')}></ImageBackground>
  );
}

export default Splash;

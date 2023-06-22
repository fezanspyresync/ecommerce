import {Image, View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FulloundedButton({img, bg, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: bg,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <Image source={img} style={{height: 40, width: 40}} />
      </View>
    </TouchableOpacity>
  );
}

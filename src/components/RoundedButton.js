import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function RoundedButton({
  lable,
  border = false,
  onPress,
  width = '100%',
  marginTop = 0,
}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={{marginTop: marginTop}}>
      <View
        style={{
          backgroundColor: border ? 'white' : 'black',
          padding: 10,
          borderRadius: 20,
          marginLeft: 10,
          borderColor: 'black',
          borderWidth: border ? 1 : 0,
          width: width,
        }}>
        <Text
          style={{
            color: border ? 'black' : 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {lable}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

import {View, TextInput} from 'react-native';
import React from 'react';

export default function TextInputcom({
  placeholder,
  keyboard = 'default',
  secureTextEntry = false,
  value,
  onPress,
}) {
  return (
    <View
      style={{
        borderBottomColor: '#EAECEE',
        borderBottomWidth: 1,
        marginBottom: 15,
      }}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboard}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={text => onPress(text)}
      />
    </View>
  );
}

import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function FormTextInput({placeholder, extraStyle}) {
  return (
    <View
      style={[
        {
          borderBottomColor: '#D5D8DC',
          borderBottomWidth: 1,
        },
        extraStyle,
      ]}>
      <TextInput placeholder={placeholder} />
    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import FormTextInput from '../../components/FormTextInput';

export default function MyShop() {
  return (
    <View style={{flex: 1, padding: 15}}>
      <FormTextInput placeholder="Name" />
      <FormTextInput placeholder="Email" extraStyle={{marginTop: 10}} />
      <FormTextInput placeholder="Phone" extraStyle={{marginTop: 10}} />
      <FormTextInput placeholder="Address" extraStyle={{marginTop: 10}} />
    </View>
  );
}

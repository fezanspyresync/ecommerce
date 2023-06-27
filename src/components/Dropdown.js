import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Dropdown({
  extraStyle,
  label,
  image,
  onPress,
  checked = false,
}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[
          {
            borderColor: '#D5D8DC',
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          extraStyle,
        ]}>
        <View>
          <Text>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {checked ? (
            <AntDesign
              style={{marginRight: 10}}
              name="checkcircle"
              size={25}
              color="#3AE108"
            />
          ) : null}

          {image}
        </View>
      </View>
    </TouchableOpacity>
  );
}

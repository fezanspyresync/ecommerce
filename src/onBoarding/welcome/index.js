import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = [
  {id: 1, image: require('../../assets/72342-welcome.json')},
  {
    id: 2,
    image: require('../../assets/85795-man-and-woman-say-hi.json'),
  },
];

const RenderList = ({item}) => {
  console.log('====================', item);
  return (
    <View
      style={{
        width: wp('100%'),
        backgroundColor: item.color,
      }}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Lottie
          style={{
            width: wp('95%'),
          }}
          resizeMode="cover"
          source={item.image}
          autoPlay
          loop
        />
      </View>
      <View style={{flex: 0.5, padding: 20}}>
        <Text>Welcome to Home</Text>
      </View>
    </View>
  );
};

export default function BoardingScreen() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        contentContainerStyle={{justifyContent: 'space-between'}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <RenderList item={item} />}
        horizontal
        pagingEnabled
      />
    </View>
  );
}

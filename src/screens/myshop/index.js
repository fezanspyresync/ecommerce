import {View, Text} from 'react-native';
import React, {useState} from 'react';
import FormTextInput from '../../components/FormTextInput';
import Dropdown from '../../components/Dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function MyShop() {
  const [imagePick, setImagePick] = useState();
  async function pickImageFromGallery() {
    const data = await launchImageLibrary();

    if (data.didCancel) {
      return;
    }
    setImagePick(data);
  }

  return (
    <View style={{flex: 1, padding: 15}}>
      <ScrollView>
        <FormTextInput placeholder="Name" />
        <FormTextInput placeholder="Email" extraStyle={{marginTop: 10}} />
        <FormTextInput placeholder="Phone" extraStyle={{marginTop: 10}} />
        <FormTextInput placeholder="Address" extraStyle={{marginTop: 10}} />
        <Dropdown
          label={'Upload shop image'}
          extraStyle={{marginTop: 20}}
          image={<Ionicons name="ios-image" size={30} />}
          onPress={pickImageFromGallery}
          checked={imagePick ? true : false}
        />
        <Dropdown
          label={'Upload shop owner image'}
          extraStyle={{marginTop: 20}}
          image={<Ionicons name="ios-image" size={30} />}
        />
        <Dropdown
          label={'Select catagory'}
          extraStyle={{marginTop: 20}}
          image={<EvilIcons name="chevron-down" size={30} />}
        />
        <Dropdown
          label={'Select shop location'}
          extraStyle={{marginTop: 20}}
          image={<MaterialIcons name="my-location" size={30} />}
        />
        <Dropdown
          label={'Open Time'}
          extraStyle={{marginTop: 20}}
          image={<Ionicons name="time" size={30} />}
        />
        <Dropdown
          label={'Close Time'}
          extraStyle={{marginTop: 20}}
          image={<Ionicons name="time" size={30} />}
        />
      </ScrollView>
    </View>
  );
}

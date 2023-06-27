import {View, Text, Dimensions, Button, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import FormTextInput from '../../components/FormTextInput';
import Dropdown from '../../components/Dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';

const CatagoryLS = [
  {id: 1, name: 'Diary Milk'},
  {id: 2, name: 'Motor Bike'},
  {id: 3, name: 'LCD'},
  {id: 4, name: 'Hard'},
  {id: 5, name: 'SSD'},
];

export default function MyShop() {
  const refRBSheet = useRef(null);
  const [imagePick, setImagePick] = useState();
  const [ShopCatagory, setShopCatagory] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  async function pickImageFromGallery() {
    const data = await launchImageLibrary();

    if (data.didCancel) {
      return;
    }
    setImagePick(data);
  }

  return (
    <View style={{flex: 1, padding: 15}}>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Dimensions.get('window').height / 2}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },

          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Select Shop Catagory
          </Text>
          <View>
            {CatagoryLS.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    setShopCatagory(item.name);
                    refRBSheet.current.close();
                  }}>
                  <View
                    style={{
                      padding: 5,
                      marginTop: 15,
                      borderBottomColor: '#D5D8DC',
                      borderBottomWidth: 1,
                    }}>
                    <Text style={{color: 'black', marginBottom: 5}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </RBSheet>
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
          label={
            ShopCatagory === undefined
              ? 'Select catagory'
              : 'Select catagory -' + ShopCatagory
          }
          extraStyle={{marginTop: 20}}
          image={<EvilIcons name="chevron-down" size={30} />}
          onPress={() => refRBSheet.current.open()}
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
          onPress={() => setOpen(true)}
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

import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Welcomescreen from '../screens/welcomeScreen';
import Detail from '../screens/detailScreen';
import Lottie from 'lottie-react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MyShop from '../screens/detailScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            height: '20%',
            margin: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{height: '100%', width: '50%'}}>
            <Lottie
              autoSize
              style={{height: '100%', width: '100%'}}
              resizeMode="cover"
              source={require('../.././src/assets/98187-solariant-logo.json')}
              autoPlay
              loop
            />
          </View>
          <Text>Stark Technology</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          //   justifyContent: 'flex-end',
          padding: 20,
        }}>
        <Text style={{color: 'blue'}}>copy right is reserved </Text>
      </View>
    </>
  );
}

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Welcome"
        component={Welcomescreen}
        options={{
          drawerIcon: () => (
            <Image
              source={require('../assets/welcome.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Shop"
        component={MyShop}
        options={{
          drawerIcon: () => (
            <Image
              source={require('../assets/detail.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />

      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

function ListScreen() {
  return (
    <View>
      <Text>ojfoijishdfuisdfu</Text>
    </View>
  );
}

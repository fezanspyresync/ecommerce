import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function Welcomescreen({navigation}) {
  const [fcompo, setFcompo] = useState(true);
  const [lcompo, setLcompo] = useState(false);

  const active = 'red';
  const inactive = 'gray';

  const activeFCompo = () => {
    setLcompo(false);
    setFcompo(true);
  };
  const activeLCompo = () => {
    setFcompo(false);
    setLcompo(true);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 50,
        }}>
        <View
          style={{
            width: '30%',
            height: 30,
            backgroundColor: fcompo ? active : inactive,
          }}>
          <Text onPress={activeFCompo} style={{color: 'white'}}>
            FCompoent
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            height: 30,
            backgroundColor: lcompo ? active : inactive,
          }}>
          <Text onPress={activeLCompo} style={{color: 'white'}}>
            SCompoent
          </Text>
        </View>
      </View>
      {fcompo ? <Fcom /> : <Scom />}
    </>
  );
}

function Fcom() {
  return (
    <View>
      <Text>Fcomponent</Text>
    </View>
  );
}

function Scom() {
  return (
    <View>
      <Text>Scomponent</Text>
    </View>
  );
}

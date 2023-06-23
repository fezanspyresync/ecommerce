import {View, Text} from 'react-native';
import React from 'react';
import TextInput from '../../components/TextInputcom';
import TextInputcom from '../../components/TextInputcom';
import RoundedButton from '../../components/RoundedButton';
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

export default function Signup({navigation}) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Toast.show({
          type: 'success',
          text1: 'Congrat',
          text2: 'user is created successfully 👋',
        });
        setTimeout(() => {
          navigation.replace('Auth');
        }, 2000);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#ffffff',
      }}>
      <View style={{flex: 0.5, padding: 15}}>
        <Lottie
          //resizeMode="cover"
          //style={{height: '100%', width: '100%'}}
          source={require('../../assets/90888-signup.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Sign up
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TextInputcom
            placeholder="email"
            keyboard="email-address"
            value={email}
            onPress={setEmail}
          />
          <TextInputcom
            placeholder="password"
            secureTextEntry={true}
            value={password}
            onPress={setPassword}
          />
          <RoundedButton lable={'Sign Up'} marginTop={30} onPress={onSignup} />
        </View>
      </View>
    </View>
  );
}

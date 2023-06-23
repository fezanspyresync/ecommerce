import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';
import RoundedButton from '../../components/RoundedButton';
import FulloundedButton from '../../components/FulloundedButton';
import {onGoogleButtonPress} from '../../config/firebase/firebase';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export default function SignIn({navigation}) {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const googleSignIn = async () => {
    const data = await onGoogleButtonPress();
    console.log(data);
  };

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Welcome To Our App',
      text2: 'This is some something 👋',
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.5}}>
        <Lottie
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/71230-sign-in-green.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Hello
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,

            color: 'black',
          }}>
          Welcome to our Ecommerce App
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <RoundedButton lable="login" width={120} />
          <RoundedButton
            lable="signUp"
            border={true}
            width={120}
            onPress={() => navigation.navigate('signup')}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <Text style={{textAlign: 'center', marginTop: 20}}>
            Or via other social media account
          </Text>
          <View
            style={{
              //   flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              //   alignItems: 'flex-end',
              //   paddingBottom: 20,
              //   marginTop: 20,
              //   marginLeft: 10,
            }}>
            <FulloundedButton
              img={require('../../assets/go.png')}
              bg="#d95d50"
              onPress={googleSignIn}
            />
            <FulloundedButton
              img={require('../../assets/facebook.png')}
              bg="#3e63b5"
              onPress={onFacebookButtonPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

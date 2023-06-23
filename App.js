import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Splash from './src/screens/splash/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './src/screens/signin';
import Signup from './src/screens/signup';
import Toast from 'react-native-toast-message';
import Welcomescreen from './src/screens/welcomeScreen';
import DrawerStack from './src/navigation/drawerStack';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signin"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Auth"
            component={DrawerStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

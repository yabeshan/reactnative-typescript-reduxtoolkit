import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store'

import InfoScreen from './screens/Info'
import LoginScreen from './screens/Login'
import UserScreen from './screens/User'
import WelcomeScreen from './screens/Welcome'

import {
  HeaderBackButton,
} from './components'

const Stack = createStackNavigator();

export default function App() {

  const stackHeaderOptions = {
      headerShown: true, 
      headerStyle: {
        backgroundColor: 'transparent',
      },
      title:'',
      headerLeft: () => <HeaderBackButton />
  };

  return (
    <SafeAreaProvider>
      <ReduxProvider store={ store }>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="InfoScreen">
            <Stack.Screen 
              name="WelcomeScreen" 
              component={WelcomeScreen} 
              options={{headerShown: false}}
              />
            <Stack.Screen 
              name="LoginScreen" 
              component={LoginScreen} 
              options={{headerShown: false}}
              />
            <Stack.Screen 
              name="UserScreen" 
              component={UserScreen}
              options={stackHeaderOptions}
              />
            <Stack.Screen 
              name="InfoScreen" 
              component={InfoScreen} 
              options={stackHeaderOptions}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

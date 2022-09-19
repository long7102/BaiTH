import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailScreen from '../screens/EmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Home from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='ConfirEmail' component={EmailScreen} />
      <Stack.Screen name='ForgotPass' component={ForgotPasswordScreen} />
      <Stack.Screen name='NewPass' component={NewPasswordScreen } />
      <Stack.Screen name='Home' component={Home} />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
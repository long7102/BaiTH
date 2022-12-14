/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen/WorkoutScreen';
import Pratice from '../screens/Pratice/Pratice';
import RestScreen from '../screens/RestSCreen/RestScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen}/>
        <Stack.Screen name="Pratice" component={Pratice}/>
        <Stack.Screen name="RestScreen" component={RestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

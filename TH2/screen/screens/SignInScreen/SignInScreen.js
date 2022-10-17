/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions, TextInput} from 'react-native';
import Logo from '../../../assests/images/logo_200x200.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation';
import {useForm, Controller} from 'react-hook-form';
const SignInScreen = () => {

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSignInPressed = () => {
    console.warn('Sign in');
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
    navigation.navigate('ForgotPassword');
  };
  const onSignInGG = () => {
    console.warn('Sign in with Google');
  };
  const onSignInFB = () => {
    console.warn('Sign in with Facebook');
  };
  const onSignUP = () => {
    console.warn('Sign up');
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{ required: 'Username is not empty', minLength: { value: 3, message: 'Username should be minium 3 characters long' } }}
      />
      <CustomInput
        placeholder="Password"
        name="password"
        secureTextEntry={true}
        control={control}
        rules={{ required: 'Password is not empty', minLength: { value: 3, message: 'Password should be minium 3 characters long' } }}
      />
      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>
      <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed}/>
      <CustomButton text="Sign In with Google" onPress={onSignInGG} bgColor="#FAE9EA" fgColor="red"/>
      <CustomButton text="Sign In with Facebook" onPress={onSignInFB} bgColor="#E7EAF4" fgColor="blue"/>
      <CustomButton text="Dont't have an account, Create one" onPress={onSignUP} bgColor="black" fgColor="#4765A9"/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    flex: 1,
  },
  logo: {
    marginTop: 50,
    width: '70%',
    maxWidth: 500,
    maxHeight: 250,
    marginBottom: 0,
  },
});
export default SignInScreen;

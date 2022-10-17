import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSighInPressed = () => {
    //console.warn("Sigh In");
    navigation.navigate('Home');
  }
  const onForgotPasswordPressed = () => {
    //console.warn("Forgot Password");
    navigation.navigate('ForgotPass')
  }
  const onSighInFace = () => {
    console.warn("onSighInFace");
  }
  const onSighInGoogle = () => {
    console.warn('onSighInGoogle');
  }
  const onSighInApple = () => {
    console.warn('onSighInApple');
  }

  const onSignUpPress = () => {
    //console.warn("onSignUpPress");
    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Image source={Logo} style={styles.logo} resizeMode='contain' />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text='Sigh In' onPress={onSighInPressed} />
        <CustomButton type='Ter' text='Forgot password' onPress={onForgotPasswordPressed} />
        <CustomButton type='Ter' text='Dont Have an account? Create one' onPress={onSignUpPress} />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    paddingTop:110
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
})

export default SignInScreen
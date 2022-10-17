import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInbtn from '../../components/SocialSignInbtn/SocialSignInbtn';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirEmail');
  }
  

  const onSignInPress = () => {
    //console.warn("onSignIpPress");
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={true} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
        
        <CustomButton text='Register' onPress={onRegisterPressed} />

        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text></Text>
        <SocialSignInbtn></SocialSignInbtn>
        <CustomButton type='Ter' text='Have an account? Sign in' onPress={onSignInPress} />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical:10,
  },
  link:{
    color: '#fDb075'
  }
})

export default SignUpScreen
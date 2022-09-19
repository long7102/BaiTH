import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInbtn from '../../components/SocialSignInbtn/SocialSignInbtn';
import { useNavigation } from '@react-navigation/native';

const EmailScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  }
  

  const onResendPress = () => {
    navigation.navigate('SignIn');
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your</Text>
        <CustomInput placeholder="Enter your comfirmation code" value={code} setValue={setCode} />
        <CustomButton text='Confirm' onPress={onConfirmPressed} />
        <CustomButton type='sec' text='Resend code' onPress={onResendPress} />
        <CustomButton type='Ter' text='Back to Sign in' onPress={onSignInPress} />

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

export default EmailScreen
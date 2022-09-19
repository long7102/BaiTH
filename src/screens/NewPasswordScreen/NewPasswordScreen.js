import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInbtn from '../../components/SocialSignInbtn/SocialSignInbtn';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Home');

  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />
        <CustomButton text='Submit' onPress={onSubmitPressed} />
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

export default NewPasswordScreen
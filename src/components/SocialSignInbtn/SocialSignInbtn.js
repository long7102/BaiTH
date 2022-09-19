import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInbtn = () => {
  const onSighInFace = () => {
    console.warn("onSighInFace");
  }
  const onSighInGoogle = () => {
    console.warn('onSighInGoogle');
  }
  const onSighInApple = () => {
    console.warn('onSighInApple');
  }
  
  return (
    <>        
        
        
        <CustomButton
          text='Sigh In With Facebook'
          onPress={onSighInFace}
          bgCl="#e7eaf4"
          fgCl="#4765a9"
        />
        <CustomButton text='Sigh In With Google' onPress={onSighInGoogle} bgCl="#fae9ea"
          fgCl="#dd4d44" />
        <CustomButton text='Sigh In With Apple' onPress={onSighInApple} bgCl="#e3e3e3"
          fgCl="#363636" />
    </>
  )
}

export default SocialSignInbtn
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
const [name,setName] = useState('');
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    try {
      await AsyncStorage.getItem('TASKS')
        .then(value =>{if (value != null){setName(value);}});
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>{` Welcome ${name}`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    height: '100%',
  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'white',
  },
});
export default HomeScreen;

/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import fitness from '../fitness';
import {useNavigation} from '@react-navigation/native';

const FitnessCard = () => {

  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item,key) => (
        <Pressable onPress={()=>navigation.navigate('WorkoutScreen',{image:item.image,excersises:item.excersises,id:item.id})} style={styles.press} key={key}>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text style={styles.text}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 140,
    borderRadius: 7,
  },
  press:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingTop: 10,
  },
  text:{
    position:'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    top: 25,
    textAlign:'center',
  },
});
export default FitnessCard;

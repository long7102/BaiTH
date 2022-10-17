/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

import FitnessCard from '../components/FitnessCard/FitnessCard';

const HomeScreen = () => {

  return (
    <ScrollView style={styles.view}>
    <View style={styles.root}>
      <Text style={styles.text}> HOME WORKOUT </Text>
      <View style={styles.info}>
      <View>
        <Text style={styles.text2}>0</Text>
        <Text style={styles.text3}>WORKOUT</Text>
      </View>
      <View>
        <Text style={styles.text2}>0</Text>
        <Text style={styles.text3}>KCALS</Text>
      </View>
      <View>
        <Text style={styles.text2}>0</Text>
        <Text style={styles.text3}>MINS</Text>
      </View>
      </View>
      <View style={styles.home}>
  <Image style={styles.img}
    source={{
      uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
    }}
  />
</View>
<FitnessCard/>
    </View>
    </ScrollView>
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
  text2:{
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
  },
  text3:{
    color:'white',
    fontSize: 17,
    marginTop: 6,
    resizeMode:'contain',
    textAlign: 'center',
  },
  info:{
    flexDirection: 'row',
    alginItems:'center',
    justifyContent:'space-between',
    marginTop: 25,
  },
  workout:{
    width:'90%',
    height: 120,
    marginTop: 25,
    borderRadius: 3,
  },
  home:{
    justifyContent: 'center', alignItems: 'center',
  },
  img:{
    width: '90%', height: 120, marginTop: 20, borderRadius: 7,
  },
  // view:{
  //   marginTop: 50,
  // },
});
export default HomeScreen;

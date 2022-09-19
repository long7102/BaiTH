import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24 , alignSelf: 'center'}}>Home sdsdsdsd</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  }
})

export default Home
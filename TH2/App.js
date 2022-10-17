import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './screen/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;

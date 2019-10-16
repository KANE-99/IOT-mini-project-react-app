import React from 'react';
import { StyleSheet, View } from 'react-native';
import Data from './src/data';

export default function App() {
  return (
    <View style={styles.container}>
      <Data></Data>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

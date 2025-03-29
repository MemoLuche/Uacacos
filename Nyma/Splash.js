// Splash.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/NYMA.png')}
        style={styles.nymaImage}
        resizeMode="contain"
      />
      <Image
        source={require('./assets/viejitosfranja.png')}
        style={styles.abuelitosImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nymaImage: {
    width: width * 0.8,
    height: 200,
  },
  abuelitosImage: {
    marginTop: 50,
    width: width,
    height: 400,
  },
});

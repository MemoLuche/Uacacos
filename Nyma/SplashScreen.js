// SplashScream.js
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SplashScream({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // 3 segundos de splash
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Imagen con el logo NYMA */}
      <Image
        source={require('./assets/NYMA.png')}
        style={styles.nymaImage}
        resizeMode="contain"
      />
      {/* Imagen con los abuelitos y la franja */}
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
    justifyContent: 'flex-start',
  },
  nymaImage: {
    marginTop: 120,
    width: width * 0.8,
    height: 200,
  },
  abuelitosImage: {
    marginTop: 80,
    width: width,
    height: 400,
  },
});

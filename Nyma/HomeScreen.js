// HomeScream.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScream() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a Nyma!</Text>
      {/* Aquí puedes agregar el contenido principal de tu aplicación */}
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

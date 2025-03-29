// Seguridad.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Seguridad() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuracion</Text>
      <Text>Bienvenido al apartado de Configuracion de NYMA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F8F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

// ConfiguracionUsuarios.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function ConfiguracionUsuarios({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuario</Text>

      {/* Aquí irá el formulario en el futuro */}
      <Text style={styles.text}>Pantalla para editar la información personal del usuario.</Text>

      {/* Botón para volver */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./assets/home.png')} style={styles.homeButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 50,
    textAlign: 'center',
  },
  homeButton: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
});

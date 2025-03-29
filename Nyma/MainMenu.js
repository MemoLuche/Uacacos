// MainMenu.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Seguridad from './Seguridad'; // Importamos la clase Seguridad

export default class MainMenu extends Component {
  render() {
    // Función para manejar el boton de seguridad
  const handleLogin = () => {
    return <Seguridad />;
  };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Menú Principal</Text>
        <Text>Bienvenido al menú principal de NYMA.</Text>
        <View style={styles.bottomWaveContainer}>
                <Image
                  source={require('./assets/franjaverde_InicioSesion.png')}
                  style={styles.waveImage}
                  resizeMode="cover"
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSeguridad}>
                        <Text style={styles.buttonText}>Ingresar</Text>
                      </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F8F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomWaveContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 120,
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
});

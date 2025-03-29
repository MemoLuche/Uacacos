// MainMenu.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.option}>
          <Image source={require('./assets/bienestar.png')} style={styles.icon} />
          <Text style={styles.optionText}>Bienestar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Seguridad')}>
          <Image source={require('./assets/seguridad.png')} style={styles.icon} />
          <Text style={styles.optionText}>Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={require('./assets/recordatorios.png')} style={styles.icon} />
          <Text style={styles.optionText}>Recordatorios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={require('./assets/configuracion.png')} style={styles.icon} />
          <Text style={styles.optionText}>Configuración</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./assets/franjaverde_InicioSesion.png')} style={styles.wave} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F8F6',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  option: {
    width: 120,
    height: 120,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  optionText: {
    fontWeight: '600',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 120,
  },
});

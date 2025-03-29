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

      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />

      <TouchableOpacity>
        <Image source={require('./assets/salir.png')} style={styles.exit} resizeMode='cover' />
      </TouchableOpacity>
      
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
  exit : {
    margin: 10,
    padding: 30,
    marginTop: 50, 
  },
  title: {
    fontSize: 65,
    fontWeight: 'black',
    fontFamily: 'Arial',
    height: 130,
    marginTop: 130,
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
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  icon: {
    width: 120,
    height: 120,
    marginTop: 33, 
    marginBottom: 15.7,
    borderRadius: 15,
  },
  optionText: {
    marginTop: 0,
    fontWeight: '600',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 350,
  },
});

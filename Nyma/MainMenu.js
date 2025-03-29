// MainMenu.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function MainMenu({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola!</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Bienestar')}>
          <Image source={require('./assets/bienestar.png')} style={styles.icon} />
          <Text style={styles.optionText}>Bienestar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Seguridad')}>
          <Image source={require('./assets/seguridad.png')} style={styles.icon} />
          <Text style={styles.optionText}>Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Recordatorios')}>
          <Image source={require('./assets/recordatorios.png')} style={styles.icon} />
          <Text style={styles.optionText}>Recordatorios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Configuracion')}>
          <Image source={require('./assets/configuracion.png')} style={styles.icon} />
          <Text style={styles.optionText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option2} onPress={() => navigation.navigate('ChatVoz')}>
          <Image source={require('./assets/volume.png')} style={styles.icon2} />
          <Text style={styles.optionText2}>Asistente</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />
      
      <TouchableOpacity onPress={onLogout}>
        <Image source={require('./assets/salir.png')} style={styles.exit}/>
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
    padding: 30,
    marginTop: 20, 
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
    width: 30,
    height: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    margin: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  option2: {
    width: 220,
    height: 220,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginTop: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 33, 
    marginBottom: 15.7,
    borderRadius: 15,
  },
  icon2: {
    width: 200,
    height: 200,
    marginTop: 33, 
    marginBottom: 15.7,
    borderRadius: 15,
  },
  optionText: {
    opacity: 0,
    marginTop: 0,
    fontWeight: '600',
    fontSize: 20,
  },
  optionText2: {
    marginTop: 0,
    fontWeight: '600',
    fontSize: 20,
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 350,
  },
});

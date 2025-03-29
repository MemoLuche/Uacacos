// Seguridad
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Seguridad({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seguridad</Text>

      {/* Sensor de gas */}
      <View style={styles.card}>
        <Image source={require('./assets/gas.png')} style={styles.icon} />
        <View style={styles.cardText}>
          <Text style={styles.boldText}>Sensor de gas</Text>
          <Text>Todo en orden</Text>
        </View>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Historial...</Text>
        </TouchableOpacity>
      </View>

      {/* Puertas y ventanas */}
      <View style={styles.card}>
        <Image source={require('./assets/window.png')} style={styles.icon} />
        <View style={styles.cardText}>
          <Text style={styles.boldText}>Puertas y ventanas</Text>
          <Text>Ventana del Cuarto abierta hace 3 horas</Text>
        </View>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Leído</Text>
        </TouchableOpacity>
      </View>

      {/* Alertas */}
      <View style={styles.card}>
        <Image source={require('./assets/alert.png')} style={styles.icon} />
        <View style={styles.cardText}>
          <Text style={styles.boldText}>Alertas</Text>
          <Text>Sensor de gas activado ayer - 09:45</Text>
        </View>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Historial...</Text>
        </TouchableOpacity>
      </View>

      {/* Botón home */}
      <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate('MainMenu')}>
        <Image source={require('./assets/Home.png')} style={styles.HomeIcon} />
      </TouchableOpacity>

      {/* Ola decorativa */}
      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    width: '100%',
    backgroundColor: '#E8ECE8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  smallButton: {
    backgroundColor: '#DADBD7',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  smallButtonText: {
    fontSize: 12,
    color: '#333',
  },
  HomeButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 15,
  },
  HomeIcon: {
    width: 40,
    height: 40,
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 130,
  },
});

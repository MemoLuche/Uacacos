// Bienestar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function Bienestar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienestar</Text>

      <View style={styles.card}>
        <Image source={require('./assets/heart.png')} style={styles.icon} />
        <View>
          <Text style={styles.boldText}>Presion: 120 p/m</Text>
          <Text style={styles.boldText}>Azucar: 90 mg/dL</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('./assets/emotion.png')} style={styles.icon} />
        <View>
          <Text style={styles.boldText}>Registro emocional</Text>
          <Text style={styles.subText}>¿Cómo va tu día hoy?</Text>
          </View>
      </View>

      <View style={styles.card}>
        <Image source={require('./assets/lungs.png')} style={styles.icon} />
        <View>
            <Text style={styles.boldText}>Respiración guiada</Text>
            <Text style={styles.subText}>Iniciar sesión de 3 min.</Text>
        </View>
      </View>

      {/* Botón home */}
      <TouchableOpacity style={styles.HomeButton}>
       <Image source={require('./assets/Home.png')} style={styles.HomeIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    paddingTop: 120,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  card: {
    width: 300,
    height: 120,
    backgroundColor: '#E8ECE8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    gap: 15,
  },
  icon: {
    width: 80,
    height: 80,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  subText: {
    fontSize: 16,
    color: '#444',
  },
  homeButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 15,
  },
  homeIcon: {
    width: 60,
    height: 60,
  },
});

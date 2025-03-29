// RecuperarClave.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RecuperarCuentas() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleAceptar = () => {
    // Aquí podrías validar si el código es correcto
    Alert.alert('Clave enviada', 'Revisa tu correo electrónico.');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/NYMAInicioSesion.png')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.label}>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} keyboardType="email-address" />

      <Text style={styles.label}>Clave :</Text>
      <TextInput style={styles.input} value={clave} onChangeText={setClave} />

      <Text style={styles.infoText}>La clave se enviará a su correo electrónico</Text>

      <TouchableOpacity style={styles.button} onPress={handleAceptar}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>

      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 400,
    height: 250,
    marginTop: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#E8ECE8',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4A644A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
  },
});

// Registro.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [sexo, setSexo] = useState(null); // 'F' o 'M'
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleAceptar = () => {
    console.log({ nombre, correo, sexo, usuario, contrasena });
    // Aquí podrías validar o enviar a backend
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/NYMAInicioSesion.png')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

      <Text style={styles.label}>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} keyboardType="email-address" />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, sexo === 'F' && styles.genderSelected]}
          onPress={() => setSexo('F')}
        >
          <Text>F</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, sexo === 'M' && styles.genderSelected]}
          onPress={() => setSexo('M')}
        >
          <Text>M</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Usuario:</Text>
      <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput style={styles.input} value={contrasena} onChangeText={setContrasena} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleAceptar}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
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
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 20,
  },
  genderButton: {
    backgroundColor: '#E8ECE8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  genderSelected: {
    backgroundColor: '#A6B7A6',
  },
  button: {
    backgroundColor: '#4A644A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

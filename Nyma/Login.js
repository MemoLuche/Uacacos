// Login.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    if (!usuario || !contrasena) {
        onLogin();
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña');
    } else {
      onLogin();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/NYMAInicioSesion.png')} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgot} onPress={() => Alert.alert('Recuperar contraseña')}>
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Registro')}>
        <Text style={styles.register}>Regístrate</Text>
      </TouchableOpacity>

      <Image source={require('./assets/franjaverde_InicioSesion.png')} style={styles.wave} resizeMode="cover" />
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
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  register: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 120,
  },
});

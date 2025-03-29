import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ConfiguracionUsuario({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [tiempoEspera, setTiempoEspera] = useState('1 min');

  const handleAceptar = () => {
    alert('Cambios guardados correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Cambiar nombre usuario</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Cambiar contraseña</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />

        <Text style={styles.label}>Confirmar Contraseña</Text>
        <TextInput
          style={styles.input}
          value={confirmar}
          onChangeText={setConfirmar}
          secureTextEntry
        />

        <Text style={styles.label}>Tiempo de espera</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{tiempoEspera}</Text>
          <Text style={styles.dropdownArrow}>⌄</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aceptarButton} onPress={handleAceptar}>
          <Text style={styles.aceptarText}>Aceptar</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F8F6',
    justifyContent: 'flex-start',
    minHeight: height,
    height: height,
    overflow: 'hidden',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Arial',
    marginTop: 130,
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#DDE4DD',
    borderRadius: 15,
    width: 0.9 * width,
    padding: 20,
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: '#2A2A2A',
  },
  input: {
    backgroundColor: '#F0F3F0',
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: '#DDE4DD',
    width: 100,
    height: 40,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  dropdownText: {
    color: '#2A2A2A',
    fontWeight: 'bold',
  },
  dropdownArrow: {
    color: '#2A2A2A',
    fontSize: 18,
  },
  aceptarButton: {
    backgroundColor: '#4A6041',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  aceptarText: {
    color: '#fff',
    fontSize: 16,
  },
  wave: {
    width: '100%',
    height: 250,
    marginTop: 30,
  },
});
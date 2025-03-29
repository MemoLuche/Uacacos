import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define a breakpoint for larger screens (e.g., tablets)
const largeScreenBreakpoint = 650; // Adjust this value as needed

export default function Configuracion({ navigation }) {
  const [usuario, setUsuario] = useState({});
  const [contactos, setContactos] = useState([]);
  const isLargeScreen = height > largeScreenBreakpoint;

  useEffect(() => {
    fetch('http://localhost:3000/api/configuracion/usuario')
      .then(res => res.json())
      .then(data => setUsuario(data))
      .catch(err => console.log(err));

    fetch('http://localhost:3000/api/configuracion/contactos')
      .then(res => res.json())
      .then(data => setContactos(data))
      .catch(err => console.log(err));
  }, []);

  const contactar911 = () => {
    Alert.alert('Emergencia', 'Llamando al 911...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      {/* Contactos de emergencia */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contactos de emergencia</Text>

        {contactos.map((contacto, index) => (
          <View key={index} style={styles.contactRow}>
            <Image source={require('./assets/iconUser.png')} style={styles.avatar} />
            <View style={styles.contactText}>
              <Text style={styles.nameText}>{contacto.nombre}</Text>
              <Text style={styles.grayText}>{contacto.relacion}</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editText}>Editar &gt;</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addContact}>
          <Image source={require('./assets/agregarUsuario.png')} style={styles.addIcon} />
          <Text style={styles.addContactText}>Agregar nuevo contacto</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de emergencia */}
      <View style={styles.emergencyCard}>
        <TouchableOpacity style={styles.emergencyButton} onPress={contactar911}>
          <Text style={styles.emergencyButtonText}>Contactar al 911</Text>
        </TouchableOpacity>
        <Text style={styles.grayText}>Usar solo en caso de emergencia</Text>
      </View>

      {/* Información personal */}
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.sectionTitle}>Información personal</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionUsuario')}>
            <Image source={require('./assets/editInfoUser.png')} style={styles.editIconImage} />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{usuario.nombre}</Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.value}>{usuario.correo}</Text>
      </View>

      {/* Botón de volver al menú principal */}
      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
        <Image source={require('./assets/Home.png')} style={styles.HomeButton} />
      </TouchableOpacity>

      <Image source={require('./assets/franjaverde3.png')} style={styles.wave} resizeMode="cover" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F9F8F6',
    paddingBottom: 20,
    minHeight: height,
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
    width: '90%', // Adjusted width to be responsive
    maxWidth: 400, // Added maxWidth to prevent stretching too much on larger screens
    padding: 20,
    marginBottom: 15, // Further reduced margin
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    color: '#2A2A2A',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  contactText: {
    flex: 1,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 14,
  },
  grayText: {
    color: '#666',
    fontSize: 13,
  },
  editBtn: {
    paddingLeft: 10,
  },
  editText: {
    color: '#333',
    fontWeight: '500',
  },
  addContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  addIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  addContactText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emergencyCard: {
    backgroundColor: '#DDE4DD',
    borderRadius: 15,
    width: '90%', // Adjusted width to be responsive
    maxWidth: 400, // Added maxWidth
    padding: 20,
    alignItems: 'center',
    marginBottom: 15, // Further reduced margin
  },
  emergencyButton: {
    backgroundColor: '#D16666',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginBottom: 10,
  },
  emergencyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  label: {
    fontWeight: '500',
    marginTop: 12,
    fontSize: 13,
    color: '#444',
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
  },
  editIconImage: {
    width: 24,
    height: 24,
  },
  homeButton: {
    width: 60,
    height: 60,
    marginTop: 5, // Further reduced marginTop
    marginBottom: 5, // Further reduced marginBottom
  },
  wave: {
    width: '100%',
    height: 250,
    marginTop: 5, // Further reduced marginTop
  },
});
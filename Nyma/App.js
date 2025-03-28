import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>

      {/* Título principal */}
      <Text style={styles.title}>NYMA</Text>
      <Text style={styles.subtitle}>Apoyo con libertad</Text>

      {/* Hojas en posición absoluta (una a la izquierda, otra a la derecha) */}
      <Image
        source={require('./assets/hoja.png')}
        style={[styles.leaf, { top: 40, left: 20 }]}
      />
      <Image
        source={require('./assets/hoja2.png')}
        style={[styles.leaf, { top: 80, right: 20 }]}
      />

      {/* Pareja de abuelitos en el centro */}
      <Image
        source={require('./assets/Abuelitos.png')}
        style={styles.abuelitos}
      />

      {/* Franja verde (onda) al fondo, en la parte inferior */}
      <Image
        source={require('./assets/franjaverde2.png')}
        style={styles.wave}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9F5', // Color crema aproximado
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subtitle: {
    fontSize: 18,
    color: '#7F7F7F',
    marginTop: 5,
    marginBottom: 20,
  },
  leaf: {
    position: 'absolute',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  abuelitos: {
    width: width * 0.5,        // Ajusta a tu gusto
    height: width * 0.5,       // Mantiene proporción
    resizeMode: 'contain',
    marginBottom: 20,
    zIndex: 2,                 // Para que aparezca encima de la onda
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 120,               // Ajusta para que la onda sea más alta o más baja
    resizeMode: 'cover',
    zIndex: 1,
  },
});

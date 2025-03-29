import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  // Estado para controlar si se muestra el splash o no
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Temporizador de 3 segundos (3000 ms)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  // Si showSplash es true, mostramos la pantalla inicial (splash)
  if (showSplash) {
    return (
      <View style={styles.container}>
        {/* Imagen con el texto "NYMA" y las hojas */}
        <Image
          source={require('./assets/NYMA.png')}
          style={styles.nymaImage}
          resizeMode="contain"
        />

        {/* Imagen con los abuelitos y la franja verde */}
        <Image
          source={require('./assets/viejitosfranja.png')}
          style={styles.abuelitosImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Cuando el splash desaparece, mostramos el contenido principal
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Bienvenido a Nyma</Text>
      {/* Aquí puedes continuar con el resto de tu aplicación */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6', // Color crema aproximado
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nymaImage: {
    marginTop: 120,
    width: width * 0.8,  // Aumenta el ancho si lo deseas
    height: 200,         // Ajusta la altura en proporción
  },
  abuelitosImage: {
    marginTop: 80,       // Espacio entre el logo y la franja
    width: width,        // O usa width * 0.9 para dejar margen
    height: 400,         // Ajusta al tamaño que desees
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

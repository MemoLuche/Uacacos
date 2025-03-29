import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, AppState } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Efecto que muestra el splash cuando el componente se monta
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duración del splash (3 segundos)
    return () => clearTimeout(timer);
  }, []);

  // Efecto para reiniciar el splash cada vez que la app se vuelve activa
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        // Reiniciamos el splash al reactivar la app
        setShowSplash(true);
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 5000); // Duración del splash cada vez que la app vuelve a ser activa
        return () => clearTimeout(timer);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

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

  // Contenido principal de la aplicación
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Bienvenido a Nyma</Text>
      {/* Aquí agregas el resto de tu app */}
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
    width: width * 0.8,  // Ajusta el tamaño según necesites
    height: 200,
  },
  abuelitosImage: {
    marginTop: 80,
    width: width,
    height: 400,
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

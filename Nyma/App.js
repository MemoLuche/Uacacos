import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  AppState,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import MainMenu from './MainMenu'; // Importamos la clase MainMenu

const { width, height } = Dimensions.get('window');

export default function App() {
  // Control del splash
  const [showSplash, setShowSplash] = useState(true);
  
  // Estados para login
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Estado para controlar si el usuario inició sesión
  const [loggedIn, setLoggedIn] = useState(false);

  // Efecto que muestra el splash cuando el componente se monta
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duración del splash inicial (3 segundos)
    return () => clearTimeout(timer);
  }, []);

  // Efecto para reiniciar el splash cada vez que la app se vuelve activa
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        setShowSplash(true);
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 5000); // Duración del splash al reactivar la app (5 segundos)
        return () => clearTimeout(timer);
      }
    });
    return () => subscription.remove();
  }, []);

  // Función para manejar el login
  const handleLogin = () => {
    if (!usuario || !contrasena) {
      setLoggedIn(true);
      // Alert.alert('Error', 'Por favor, ingresa tu usuario y contraseña');
    } else {
      // Aquí agregarías la lógica real de autenticación (API, validación, etc.)
      // Por el ejemplo, simulamos un login exitoso:
      setLoggedIn(true);
    }
  };

  // Si el splash está activo, se muestra la pantalla splash
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('./assets/NYMA.png')} 
          style={styles.nymaImage}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/viejitosfranja.png')}
          style={styles.abuelitosImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Si el usuario inició sesión, se muestra el MainMenu
  if (loggedIn) {
    return <MainMenu />;
  }

  // Caso contrario, se muestra la pantalla de login
  return (
    <View style={styles.loginContainer}>
      <View style={styles.topSection}>
        <Image
          source={require('./assets/NYMAInicioSesion.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
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

        <TouchableOpacity 
          style={styles.forgotContainer}
          onPress={() => Alert.alert('Recuperar contraseña', 'Aquí iría la lógica de recuperación')}
        >
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => Alert.alert('Registro', 'Aquí iría la lógica de registro')}
        >
          <Text style={styles.registerText}>Registrate</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomWaveContainer}>
        <Image
          source={require('./assets/franjaverde_InicioSesion.png')}
          style={styles.waveImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nymaImage: {
    marginTop: 120,
    width: width * 0.8,
    height: 200,
  },
  abuelitosImage: {
    marginTop: 80,
    width: width,
    height: 400,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#F9F8F6',
  },
  topSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
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
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#2980b9',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  bottomWaveContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 120,
  },
  waveImage: {
    width: '100%',
    height: '100%',
  },
});

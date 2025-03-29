// MainMenu.js
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

// Ajusta la ruta de Seguridad si es necesario
import Seguridad from './seguridad';

const { width } = Dimensions.get('window');

export default class MainMenu extends Component {
  // Ejemplo de función para manejar la navegación o lógica al presionar Seguridad
  handleSeguridad = () => {
    // Si usas React Navigation, por ejemplo:
    // this.props.navigation.navigate('Seguridad');
    // Aquí, simplemente retornamos el componente para ilustrar.
    return <Seguridad />;
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Título principal */}
        <Text style={styles.title}>¡Hola!</Text>

        {/* Grid con las cuatro opciones */}
        <View style={styles.grid}>
          {/* Botón: Bienestar */}
          <TouchableOpacity style={styles.option}>
            <Image
              source={require('./assets/bienestar.png')}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Bienestar</Text>
          </TouchableOpacity>

          {/* Botón: Seguridad */}
          <TouchableOpacity style={styles.option} onPress={this.handleSeguridad}>
            <Image
              source={require('./assets/seguridad.png')}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Seguridad</Text>
          </TouchableOpacity>

          {/* Botón: Recordatorios */}
          <TouchableOpacity style={styles.option}>
            <Image
              source={require('./assets/recordatorios.png')}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Recordatorios</Text>
          </TouchableOpacity>

          {/* Botón: Configuración */}
          <TouchableOpacity style={styles.option}>
            <Image
              source={require('./assets/configuracion.png')}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Configuración</Text>
          </TouchableOpacity>
        </View>

        {/* Franja verde en la parte inferior */}
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
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    // Justifica el contenido en la parte superior
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  option: {
    width: 120,
    height: 120,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
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

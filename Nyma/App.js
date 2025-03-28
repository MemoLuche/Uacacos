import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const enviarAlerta = () => {
    Alert.alert("🚨 Alerta", "Se ha notificado al contacto de emergencia");
  };

  const checkIn = () => {
    Alert.alert("✅ Confirmado", "El usuario ha hecho check-in");
  };

  const recordatorio = () => {
    Alert.alert("⏰ Recordatorio", "Es hora de tomar los medicamentos");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, soy Nyma</Text>

      <View style={styles.boton}>
        <Button title="Check-in: Estoy bien" onPress={checkIn} />
      </View>

      <View style={styles.boton}>
        <Button title="Simular alerta de emergencia" onPress={enviarAlerta} color="#c0392b" />
      </View>

      <View style={styles.boton}>
        <Button title="Recordatorio de medicamento" onPress={recordatorio} color="#2980b9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  boton: {
    marginVertical: 10,
    width: '100%',
  },
});

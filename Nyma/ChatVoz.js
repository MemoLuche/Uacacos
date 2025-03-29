// ✅ FRONTEND: ChatVoz.js (Expo CLI + React Native)

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const BACKEND_URL = 'http://148.220.60.125:3000';

const CONTEXTO = `Estás ayudando a un usuario en una app de asistente para responder preguntas, resolver dudas o interactuar de forma conversacional. Responde de manera clara, empática y útil.`;

export default function ChatVoz() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const enviarPregunta = async () => {
    if (!inputText.trim()) return;
    const pregunta = inputText.trim();
    setInputText('');
    agregarMensaje('Tú', pregunta);
    setIsLoading(true);
    try {
      const promptCompleto = `${CONTEXTO}\n\nPregunta del usuario: ${pregunta}`;
      const geminiRes = await axios.post(`${BACKEND_URL}/gemini`, { prompt: promptCompleto });
      const respuesta = geminiRes.data.response;
      agregarMensaje('Gemini', respuesta);
    } catch (error) {
      console.error('Error al consultar Gemini:', error);
      Alert.alert('Error', 'No se pudo obtener respuesta de la IA.');
    } finally {
      setIsLoading(false);
    }
  };

  const agregarMensaje = (remitente, texto) => {
    setMessages((prev) => [...prev, { remitente, texto }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Asistente con Gemini</Text>
      <ScrollView style={styles.chatBox} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, i) => (
          <View key={i} style={msg.remitente === 'Tú' ? styles.burbujaUsuario : styles.burbujaBot}>
            <Text style={styles.negrita}>{msg.remitente}:</Text>
            <Text>{msg.texto}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu pregunta..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.btnEnviar} onPress={enviarPregunta} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnTexto}>Enviar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  chatBox: { flex: 1, marginBottom: 10 },
  burbujaUsuario: {
    alignSelf: 'flex-end',
    backgroundColor: '#d0ebff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  burbujaBot: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6ffe6',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  negrita: { fontWeight: 'bold', marginBottom: 3 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  btnEnviar: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

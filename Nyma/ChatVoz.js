// ✅ FRONTEND: ChatVoz.js (Expo CLI + React Native)

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

const BACKEND_URL = 'http://148.220.60.125:3000'; // 👈 IP actualizada

// 🧠 CONTEXTO de uso de la app para Gemini
const CONTEXTO = `Estás ayudando a un usuario en una app de asistente por voz para responder preguntas, resolver dudas o interactuar de forma conversacional. Responde de manera clara, empática y útil.`;

export default function ChatVoz() {
  const [recording, setRecording] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const soundRef = useRef(null);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const { recording } = await Audio.Recording.createAsync({
        android: {
          extension: '.mp4',
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 16000,
          numberOfChannels: 1,
          bitRate: 32000,
        },
        ios: {
          extension: '.caf',
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
          sampleRate: 16000,
          numberOfChannels: 1,
          bitRate: 32000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        isMeteringEnabled: false,
      });      
      setRecording(recording);
    } catch (error) {
      console.error('Error al iniciar grabación', error);
    }
  };

  const stopRecording = async () => {
    setIsLoading(true);
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      await procesarAudio(uri);
    } catch (error) {
      console.error('Error al detener grabación', error);
    }
  };

  const procesarAudio = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('audio', {
        uri,
        name: 'audio.webm',
        type: 'audio/webm',
      });

      const sttRes = await fetch(`${BACKEND_URL}/stt`, {
        method: 'POST',
        body: formData,
      });
      const { transcription } = await sttRes.json();
      agregarMensaje('Tú', transcription);

      const promptCompleto = `${CONTEXTO}\n\nPregunta del usuario: ${transcription}`;
      const geminiRes = await axios.post(`${BACKEND_URL}/gemini`, { prompt: promptCompleto });
      const respuesta = geminiRes.data.response;
      agregarMensaje('Gemini', respuesta);

      const ttsRes = await fetch(`${BACKEND_URL}/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: respuesta }),
      });

      const blob = await ttsRes.blob();
      const path = FileSystem.documentDirectory + 'respuesta.mp3';
      await FileSystem.writeAsStringAsync(path, await blobToBase64(blob), {
        encoding: FileSystem.EncodingType.Base64,
      });

      const { sound } = await Audio.Sound.createAsync({ uri: path });
      soundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.error('Error procesando audio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    });
  };

  const agregarMensaje = (remitente, texto) => {
    setMessages((prev) => [...prev, { remitente, texto }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗣️ Asistente de Voz con Gemini</Text>
      <ScrollView style={styles.chatBox} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, i) => (
          <View key={i} style={msg.remitente === 'Tú' ? styles.burbujaUsuario : styles.burbujaBot}>
            <Text style={styles.negrita}>{msg.remitente}:</Text>
            <Text>{msg.texto}</Text>
          </View>
        ))}
      </ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity
          style={recording ? styles.btnDetener : styles.btnHablar}
          onPress={recording ? stopRecording : startRecording}
        >
          <Text style={styles.btnTexto}>{recording ? 'Detener' : 'Hablar'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  chatBox: { flex: 1 },
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
  btnHablar: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnDetener: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

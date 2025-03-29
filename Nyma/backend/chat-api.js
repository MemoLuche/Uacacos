// ✅ BACKEND: chat-api.js (Express + Gemini + ElevenLabs + AssemblyAI)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// 🔮 GEMINI (con API Key)
const GEMINI_API_KEY = "AIzaSyDgeZxDy_jsJcJOLH4LMjhX4vsNZMDPBV8";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

app.post('/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await axios.post(GEMINI_URL, {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    const respuesta = result.data.candidates[0].content.parts[0].text;
    res.json({ response: respuesta });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error con Gemini' });
  }
});

// 🔊 TEXT-TO-SPEECH con ElevenLabs
const ELEVEN_KEY = "sk_85c1ad13dd1ac4a26d12c9b68775418936226465a63194cc";
const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // voz por defecto

app.post('/tts', async (req, res) => {
  try {
    const { text } = req.body;
    const audioRes = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      { text, voice_settings: { stability: 0.5, similarity_boost: 0.5 } },
      {
        headers: {
          'xi-api-key': ELEVEN_KEY,
          'Content-Type': 'application/json',
          Accept: 'audio/mpeg',
        },
        responseType: 'arraybuffer',
      }
    );
    res.set('Content-Type', 'audio/mpeg');
    res.send(audioRes.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error con ElevenLabs' });
  }
});

// 🎙️ SPEECH-TO-TEXT con AssemblyAI
const ASSEMBLY_KEY = "29b69ffaefeb4659816641eb6b5a1ede";

app.post('/stt', upload.single('audio'), async (req, res) => {
  try {
    const audioData = fs.readFileSync(req.file.path);
    const uploadRes = await axios.post('https://api.assemblyai.com/v2/upload', audioData, {
      headers: {
        authorization: ASSEMBLY_KEY,
        'Transfer-Encoding': 'chunked',
      },
    });

    const audioUrl = uploadRes.data.upload_url;
    const transcriptRes = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      { audio_url: audioUrl },
      { headers: { authorization: ASSEMBLY_KEY } }
    );

    const transcriptId = transcriptRes.data.id;
    let transcription = '';
    let done = false;

    while (!done) {
      const polling = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
        headers: { authorization: ASSEMBLY_KEY },
      });
      if (polling.data.status === 'completed') {
        transcription = polling.data.text;
        done = true;
      } else if (polling.data.status === 'error') {
        throw new Error('Error al transcribir');
      } else {
        await new Promise((r) => setTimeout(r, 3000));
      }
    }

    res.json({ transcription });
    fs.unlinkSync(req.file.path);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error con AssemblyAI' });
  }
});

// 🚀 INICIAR SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend listo en http://localhost:${PORT}`));

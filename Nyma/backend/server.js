// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Conexión MongoDB local (asegúrate que mongod esté activo)
mongoose.connect('mongodb://localhost:27017/nyma')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

// Modelo Usuario
const UsuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

const Usuario = mongoose.model('usuarios', UsuarioSchema);

// Ruta de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const usuario = await Usuario.findOne({ username });
  if (!usuario) return res.status(400).json({ error: 'Usuario no encontrado' });

  // Compara contraseña cifrada
  const validPassword = await bcrypt.compare(password, usuario.password);
  if (!validPassword) return res.status(400).json({ error: 'Contraseña incorrecta' });

  res.json({ message: 'Login exitoso' });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});

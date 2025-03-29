// Database.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'nyma.db', location: 'default' },
  () => { console.log('Base de datos abierta con éxito'); },
  error => { console.log('Error al abrir DB:', error); }
);

// Crear tabla Usuarios
export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL
       );`
    );
  });
};

export const insertarUsuario = (username, password) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO usuarios (username, password) VALUES (?,?)',
      [username, password],
      () => console.log('Usuario insertado correctamente'),
      error => console.log('Error insertando usuario:', error)
    );
  });
};

export const validarUsuario = (username, password, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM usuarios WHERE username = ? AND password = ?',
      [username, password],
      (_, results) => {
        if (results.rows.length > 0) {
          callback(true);
        } else {
          callback(false);
        }
      }
    );
  });
};

export default db;

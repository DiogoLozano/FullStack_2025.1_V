const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./usuarios.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT UNIQUE,
      senha TEXT
    )
  `);
});

module.exports = {
  cadastrarUsuario: (nome, email, senha) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`,
        [nome, email, senha],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  },

  autenticarUsuario: (email, senha) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM usuarios WHERE email = ? AND senha = ?`,
        [email, senha],
        (err, row) => {
          if (err) reject(err);
          else resolve(!!row);
        });
    });
  }
};
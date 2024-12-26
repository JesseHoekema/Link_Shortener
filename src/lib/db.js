import Database from 'better-sqlite3';

const db = new Database('./shortener.db');

// Maak een tabel als deze nog niet bestaat
db.exec(`
  CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    short TEXT NOT NULL,
    long TEXT NOT NULL
  );
`);

export default db;

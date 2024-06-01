const db = require('../config/db');

const Author = {
    getAll: (callback) => {
        db.query('SELECT * FROM authors', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM authors WHERE author_id = ?', [id], callback);
    },
    create: (author, callback) => {
        db.query('INSERT INTO authors SET ?', author, callback);
    },
    update: (id, author, callback) => {
        db.query('UPDATE authors SET ? WHERE author_id = ?', [author, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM authors WHERE author_id = ?', [id], callback);
    }
};

module.exports = Author;

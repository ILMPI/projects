const db = require('../config/db');

const Author = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM authors', (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM authors WHERE author_id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    create: (author) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO authors SET ?', author, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    update: (id, author) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE authors SET ? WHERE author_id = ?', [author, id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM authors WHERE author_id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

module.exports = Author;

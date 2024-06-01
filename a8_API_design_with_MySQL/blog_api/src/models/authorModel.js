const db = require('../config/db'); // Import the database connection.

const Author = { // Define the Author model.
    getAll: (callback) => {
        db.query('SELECT * FROM authors', callback); // Query to get all authors.
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM authors WHERE author_id = ?', [id], callback); // Query to get an author by ID.
    },
    create: (author, callback) => {
        db.query('INSERT INTO authors SET ?', author, callback); // Query to create a new author.
    },
    update: (id, author, callback) => {
        db.query('UPDATE authors SET ? WHERE author_id = ?', [author, id], callback); // Query to update an author by ID.
    },
    delete: (id, callback) => {
        db.query('DELETE FROM authors WHERE author_id = ?', [id], callback); // Query to delete an author by ID.
    }
};

module.exports = Author; // Export the Author model to be used in other parts of the application.

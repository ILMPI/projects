const Author = require('../models/authorModel'); // Import the Author model.

// Function to get all authors
exports.getAllAuthors = (req, res) => {
    Author.getAll((err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

// Function to get an author by ID
exports.getAuthorById = (req, res) => {
    const id = req.params.id;
    Author.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results[0]); // If successful, send the first result as a JSON response.
        }
    });
};

// Function to create a new author
exports.createAuthor = (req, res) => {
    const newAuthor = req.body;
    Author.create(newAuthor, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.status(201).json({ id: results.insertId }); // If successful, send the ID of the newly created author.
        }
    });
};

// Function to update an author by ID
exports.updateAuthor = (req, res) => {
    const id = req.params.id;
    const updatedAuthor = req.body;
    Author.update(id, updatedAuthor, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

// Function to delete an author by ID
exports.deleteAuthor = (req, res) => {
    const id = req.params.id;
    Author.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

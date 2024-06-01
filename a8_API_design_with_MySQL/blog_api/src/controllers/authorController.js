const Author = require('../models/authorModel');

exports.getAllAuthors = (req, res) => {
    Author.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: "No authors found" });
        } else {
            res.json(results);
        }
    });
};

exports.getAuthorById = (req, res) => {
    const id = req.params.id;
    Author.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json(results[0]);
        }
    });
};

exports.createAuthor = (req, res) => {
    const newAuthor = req.body;
    Author.create(newAuthor, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ message: `Author #${results.insertId} was created successfully` });
        }
    });
};

exports.updateAuthor = (req, res) => {
    const id = req.params.id;
    const updatedAuthor = req.body;
    Author.update(id, updatedAuthor, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json({ message: "Author updated successfully" });
        }
    });
};

exports.deleteAuthor = (req, res) => {
    const id = req.params.id;
    Author.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json({ message: "Author deleted successfully" });
        }
    });
};

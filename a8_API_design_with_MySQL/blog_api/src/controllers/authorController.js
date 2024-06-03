const Author = require('../models/authorModel');

exports.getAllAuthors = async (req, res) => {
    try {
        const results = await Author.getAll();
        if (results.length === 0) {
            res.status(404).json({ message: "No authors found" });
        } else {
            res.json(results);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await Author.getById(id);
        if (results.length === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json(results[0]);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = req.body;
        const results = await Author.create(newAuthor);
        res.status(201).json({ message: `Author #${results.insertId} was created successfully` });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedAuthor = req.body;
        const results = await Author.update(id, updatedAuthor);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json({ message: "Author updated successfully" });
        }
    } catch (err) {
        res.status (500).send(err);
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await Author.delete(id);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: "This author doesn't exist" });
        } else {
            res.json({ message: "Author deleted successfully" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

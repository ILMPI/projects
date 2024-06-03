const Author = require('../models/authorModel');
const Post = require('../models/postModel');

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
        const postResults = await Post.getByAuthor(id);

        if (postResults.length > 0) {
            await Author.markAsInactive(id);
            return res.status(200).json({ message: "Author cannot be deleted because they have associated posts. Marking as inactive instead." });
        } else {
            const results = await Author.delete(id);
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "This author doesn't exist" });
            } else {
                return res.status(200).json({ message: "Author deleted successfully" });
            }
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};
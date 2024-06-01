const Post = require('../models/postModel');

exports.getAllPosts = (req, res) => {
    Post.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: "No posts found" });
        } else {
            res.json(results);
        }
    });
};

exports.getPostById = (req, res) => {
    const id = req.params.id;
    Post.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json(results[0]);
        }
    });
};

exports.createPost = (req, res) => {
    const newPost = {
        ...req.body,
        creation_date: new Date().toISOString().split('T')[0] // Set the creation date to today
    };
    Post.create(newPost, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ message: `Post #${results.insertId} was created successfully` });
        }
    });
};

exports.updatePost = (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;
    Post.update(id, updatedPost, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json({ message: "Post updated successfully" });
        }
    });
};

exports.deletePost = (req, res) => {
    const id = req.params.id;
    Post.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json({ message: "Post deleted successfully" });
        }
    });
};

exports.getPostsByAuthor = (req, res) => {
    const authorId = req.params.authorId;
    Post.getByAuthor(authorId, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: "Oops, looks like what you are looking for doesn't exist" });
        } else {
            res.json(results);
        }
    });
};

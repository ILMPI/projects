const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
    try {
        const results = await Post.getAll();
        if (results.length === 0) {
            res.status(404).json({ message: "No posts found" });
        } else {
            res.json(results);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await Post.getById(id);
        if (results.length === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json(results[0]);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createPost = async (req, res) => {
    try {
        const newPost = {
            ...req.body,
            creation_date: new Date().toISOString().split('T')[0] // Set the creation date to today
        };
        const results = await Post.create(newPost);
        res.status(201).json({ message: `Post #${results.insertId} was created successfully` });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPost = req.body;
        const results = await Post.update(id, updatedPost);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json({ message: "Post updated successfully" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await Post.delete(id);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: "This post doesn't exist" });
        } else {
            res.json({ message: "Post deleted successfully" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getPostsByAuthor = async (req, res) => {
    try {
        const authorId = req.params.authorId;
        const results = await Post.getByAuthor(authorId);
        if (results.length === 0) {
            res.status(404).json({ message: "Oops, looks like what you are looking for doesn't exist" });
        } else {
            res.json(results);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

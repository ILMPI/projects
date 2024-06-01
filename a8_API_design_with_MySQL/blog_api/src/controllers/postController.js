const Post = require('../models/postModel'); // Import the Post model.
const Author = require('../models/authorModel'); // Import the Author model.

// Function to get all posts
exports.getAllPosts = (req, res) => {
    Post.getAll((err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

// Function to get a post by ID
exports.getPostById = (req, res) => {
    const id = req.params.id;
    Post.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results[0]); // If successful, send the first result as a JSON response.
        }
    });
};

// Function to create a new post
exports.createPost = (req, res) => {
    const newPost = {
        ...req.body,
        creation_date: new Date().toISOString().split('T')[0] // Set the creation date to today
    };
    Post.create(newPost, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId });
        }
    });
};

// Function to update a post by ID
exports.updatePost = (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;
    Post.update(id, updatedPost, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

// Function to delete a post by ID
exports.deletePost = (req, res) => {
    const id = req.params.id;
    Post.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

// Function to get posts by author ID
exports.getPostsByAuthor = (req, res) => {
    const authorId = req.params.authorId;
    Post.getByAuthor(authorId, (err, results) => {
        if (err) {
            res.status(500).send(err); // If there's an error, send a 500 status code and the error message.
        } else {
            res.json(results); // If successful, send the results as a JSON response.
        }
    });
};

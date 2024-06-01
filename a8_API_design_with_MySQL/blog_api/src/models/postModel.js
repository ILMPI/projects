const db = require('../config/db'); // Import the database connection.

const Post = { // Define the Post model.
    getAll: (callback) => {
        const query = `
            SELECT 
                posts.post_id, 
                posts.title, 
                posts.description, 
                posts.creation_date, 
                posts.category, 
                authors.author_id AS author_id, 
                authors.name AS author_name, 
                authors.email AS author_email, 
                authors.image AS author_image
            FROM posts
            JOIN authors ON posts.authors_author_id = authors.author_id
        `;
        db.query(query, callback); // Query to get all posts with author details.
    },
    getById: (id, callback) => {
        const query = `
            SELECT 
                posts.post_id, 
                posts.title, 
                posts.description, 
                posts.creation_date, 
                posts.category, 
                authors.author_id AS author_id, 
                authors.name AS author_name, 
                authors.email AS author_email, 
                authors.image AS author_image
            FROM posts
            JOIN authors ON posts.authors_author_id = authors.author_id
            WHERE posts.post_id = ?
        `;
        db.query(query, [id], callback); // Query to get a post by ID with author details.
    },
    create: (post, callback) => {
        db.query('INSERT INTO posts SET ?', post, callback); // Query to create a new post.
    },
    update: (id, post, callback) => {
        db.query('UPDATE posts SET ? WHERE post_id = ?', [post, id], callback); // Query to update a post by ID.
    },
    delete: (id, callback) => {
        db.query('DELETE FROM posts WHERE post_id = ?', [id], callback); // Query to delete a post by ID.
    },
    getByAuthor: (authorId, callback) => {
        const query = `
            SELECT 
                posts.post_id, 
                posts.title, 
                posts.description, 
                posts.creation_date, 
                posts.category, 
                authors.author_id AS author_id, 
                authors.name AS author_name, 
                authors.email AS author_email, 
                authors.image AS author_image
            FROM posts
            JOIN authors ON posts.authors_author_id = authors.author_id
            WHERE posts.authors_author_id = ?
        `;
        db.query(query, [authorId], callback); // Query to get posts by author ID with author details.
    }
};

module.exports = Post; // Export the Post model to be used in other parts of the application.

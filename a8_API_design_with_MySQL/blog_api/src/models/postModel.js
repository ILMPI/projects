const db = require('../config/db');

const Post = {
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
        db.query(query, callback);
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
        db.query(query, [id], callback);
    },
    create: (post, callback) => {
        db.query('INSERT INTO posts SET ?', post, callback);
    },
    update: (id, post, callback) => {
        db.query('UPDATE posts SET ? WHERE post_id = ?', [post, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM posts WHERE post_id = ?', [id], callback);
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
        db.query(query, [authorId], callback);
    }
};

module.exports = Post;

const db = require('../config/db');

const Post = {
    getAll: () => {
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
            ORDER BY posts.post_id;
            `;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    getById: (id) => {
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
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    create: (post) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO posts SET ?', post, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    update: (id, post) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE posts SET ? WHERE post_id = ?', [post, id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM posts WHERE post_id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    },

    getByAuthor: (authorId) => {
        return new Promise((resolve, reject) => {
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
            db.query(query, [authorId], (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
};

module.exports = Post;

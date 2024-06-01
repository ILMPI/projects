const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blog_a8'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Successfully connected to MySQL Database.');
});

module.exports = connection;

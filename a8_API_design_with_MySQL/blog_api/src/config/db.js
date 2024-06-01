const mysql = require('mysql'); // Import the MySQL module.

// Create a connection to the MySQL database.
const connection = mysql.createConnection({
    host: 'localhost', // Hostname where the database is located.
    user: 'root', // Username to connect to the database.
    password: '12345678', // Password to connect to the database.
    database: 'blog_a8' // Name of the database.
});

// Establish the connection.
connection.connect((err) => {
    if (err) throw err; // Throw an error if the connection fails.
    console.log('Connected to MySQL Database.'); // Log a success message if connected.
});

module.exports = connection; // Export the connection to be used in other parts of the application.

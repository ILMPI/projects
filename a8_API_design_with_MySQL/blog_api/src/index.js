const express = require('express'); // Import the Express module.
const authorRoutes = require('./routes/authorRoutes'); // Import the Author routes.
const postRoutes = require('./routes/postRoutes'); // Import the Post routes.

const app = express(); // Create an instance of an Express application.
const PORT = process.env.PORT || 3000; // Set the port number.

app.use(express.json()); // Use middleware to parse JSON bodies.
app.use(express.urlencoded({ extended: true })); // Use middleware to parse URL-encoded bodies.

app.use('/api/authors', authorRoutes); // Use the Author routes with the prefix /api/authors.
app.use('/api/posts', postRoutes); // Use the Post routes with the prefix /api/posts.

app.listen(PORT, () => { // Start the server and listen on the specified port.
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts.
});

const express = require('express'); // Import the Express module.
const router = express.Router(); // Create a new router object.
const authorController = require('../controllers/authorController'); // Import the Author controller.

router.get('/', authorController.getAllAuthors); // Route to get all authors.
router.get('/:id', authorController.getAuthorById); // Route to get an author by ID.
router.post('/', authorController.createAuthor); // Route to create a new author.
router.put('/:id', authorController.updateAuthor); // Route to update an author by ID.
router.delete('/:id', authorController.deleteAuthor); // Route to delete an author by ID.

module.exports = router; // Export the router to be used in other parts of the application.

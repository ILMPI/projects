const express = require('express'); // Import the Express module.
const router = express.Router(); // Create a new router object.
const postController = require('../controllers/postController'); // Import the Post controller.

router.get('/', postController.getAllPosts); // Route to get all posts.
router.get('/:id', postController.getPostById); // Route to get a post by ID.
router.post('/', postController.createPost); // Route to create a new post.
router.put('/:id', postController.updatePost); // Route to update a post by ID.
router.delete('/:id', postController.deletePost); // Route to delete a post by ID.
router.get('/author/:authorId', postController.getPostsByAuthor); // Route to get posts by author ID.

module.exports = router; // Export the router to be used in other parts of the application.

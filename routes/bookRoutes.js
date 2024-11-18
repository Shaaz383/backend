const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getBooksByCategory, // Added
  getBooksByAuthor // Added
} = require('../controllers/bookControllers');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', verifyToken, addBook);  // Protected route
router.put('/:id', verifyToken, updateBook);
router.delete('/:id', verifyToken, deleteBook);

// New routes for categories and authors
router.get('/category/:category', getBooksByCategory); // Get books by category
router.get('/author/:author', getBooksByAuthor); // Get books by author

module.exports = router;

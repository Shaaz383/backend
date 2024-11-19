const express = require('express');
const {verifyToken,verifyAdmin} = require('../middleware/authMiddleware');

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
router.post('/addBook', verifyToken,verifyAdmin, addBook);  // Protected route
router.put('/:id', verifyToken,verifyAdmin, updateBook);
router.delete('/:id', verifyToken,verifyAdmin, deleteBook);

// New routes for categories and authors
router.get('/category/:category', getBooksByCategory); // Get books by category
router.get('/author/:author', getBooksByAuthor); // Get books by author

module.exports = router;

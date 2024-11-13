// routes/bookRoutes.js
const express = require('express');
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookControllers');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;

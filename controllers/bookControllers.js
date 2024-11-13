// controllers/bookController.js
const Book = require('../models/Book');

// Fetch all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

// Fetch a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) res.json(book);
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error adding book', error });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request Params ID:", req.params.id);
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedBook) res.json(updatedBook);
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(400).json({ message: 'Error updating book', error });
  }
};


// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (deletedBook) res.json({ message: 'Book deleted successfully' });
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

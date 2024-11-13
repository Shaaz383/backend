const mongoose = require('mongoose');

// Define the schema (structure) for a Book
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  published: { type: Date, required: true },
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model to use it in other files
module.exports = Book;

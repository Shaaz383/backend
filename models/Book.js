const mongoose = require('mongoose'); 

// Define the schema (structure) for a Book
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Book title
  author: { type: String, required: true }, // Author name
  pages: { type: Number, required: true },  // Number of pages
  published: { type: Date, required: true }, // Published date
  image: { type: String, required: true },  // URL or path of the book's image
  category: { type: String, required: true }, // Book category (e.g., Fiction, Non-Fiction)
  pdf: { type: String }, // Path or URL for the book's PDF
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model to use it in other files
module.exports = Book;

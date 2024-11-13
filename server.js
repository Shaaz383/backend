// Import express
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');

// Initialize the express app
const app = express();

// Middleware to parse JSON requests (for later chapters)
app.use(express.json());

//connecting mongodb
mongoose.connect("mongodb://localhost:27017/mernLibrary").then(()=>{
  console.log("Connected to MongoDB 🔥");
})


// Define a route to handle requests to the home route

// GET /books - Retrieve all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from MongoDB
    res.json(books); // Send the books as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});


// GET /books/:id - Retrieve a book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Find a book by ID
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the book', error });
  }
});

// POST /books - Add a new book
app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body); // Create a new book with data from the request body
    const savedBook = await newBook.save(); // Save the book to MongoDB
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error adding book', error });
  }
});


// PUT /books/:id - Update a book by ID
app.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,     // This ID should be a valid ObjectId
      req.body,
      { new: true }      // Return the updated document
    );
    
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error });
  }
});




// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id); // Pass a valid ObjectId here
    
    if (deletedBook) {
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
});





app.get('/authors', (req, res) => {
  res.send('List of all authors');
});










// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

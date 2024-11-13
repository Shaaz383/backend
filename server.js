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
app.get('/books', (req, res) => {
  res.send('List of all books');
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Book with ID: ${bookId} updated`);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  res.send('New book added');
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Book with ID: ${bookId} updated`);
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Book with ID: ${bookId} deleted`);
});

app.get('/authors', (req, res) => {
  res.send('List of all authors');
});










// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

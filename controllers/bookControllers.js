const Book = require('../models/Book');

// Fetch all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Returns all books with all fields, including image and category
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

// Fetch a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, pages, published, image, category } = req.body;

    const newBook = new Book({
      title,
      author,
      pages,
      published,
      image,
      category,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error adding book', error });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated book
    });

    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (deletedBook) {
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

// Fetch all books by category
exports.getBooksByCategory = async (req, res) => {
  try {
    const category = req.params.category; // Category from the URL parameter
    
    // Validate category
    if (!category) {
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    // Case-insensitive search (optional but useful if you want to handle different letter cases)
    const books = await Book.find({ category: { $regex: category, $options: 'i' } });

    if (books.length > 0) {
      res.json(books);
    } else {
      res.status(404).json({ message: `No books found in the ${category} category` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books by category', error });
  }
};


// Fetch all books by author
exports.getBooksByAuthor = async (req, res) => {
  try {
    const author = req.params.author; // Author from the URL parameter
    const books = await Book.find({ author }); // Find books that match the author

    if (books.length > 0) {
      res.json(books);
    } else {
      res.status(404).json({ message: `No books found by ${author}` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books by author', error });
  }
};
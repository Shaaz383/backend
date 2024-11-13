// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

const cors = require('cors');
app.use(cors());  // Enable CORS for all routes


// Routes
app.use('/books', bookRoutes);

// Home route
app.get('/', (req, res) => res.send('Welcome to the MERN Library API'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

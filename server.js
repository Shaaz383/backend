// Import express
const express = require('express');

// Initialize the express app
const app = express();

// Define a route to handle requests to the home route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js and Express! This is Home page');
});
app.get('/about', (req, res) => {
  res.send('This is About Page');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

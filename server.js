// Import express
const express = require('express');

// Initialize the express app
const app = express();

// Define a route to handle requests to the home route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js and Express!');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

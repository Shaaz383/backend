const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: 'Access denied' });
    return; // Add return here to stop execution
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
    return; // Add return here as well
  }

  // next(); // Don't call next() here if response is sent
};

// Middleware to check if user is admin
const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id); // Fetch the user by ID from req.user
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

module.exports = {verifyToken , verifyAdmin};

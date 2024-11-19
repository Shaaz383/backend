const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Unique and required username
  password: { type: String, required: true }, // Required password (hashed)
  fullName: { type: String, required: true }, // Full name of the user
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // Email format validation
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/ // Ensure mobile number has exactly 10 digits
  },
  photo: { type: String, default: '/default-avatar.png' }, // Profile picture (default avatar if not provided)
  membership: { type: String, default: 'Standard' }, // Membership type
  borrowedBooks: [
    {
      title: { type: String, required: true },
      dueDate: { type: Date, required: true },
      borrowedAt: { type: Date, default: Date.now }, // Timestamp for borrowed books
    },
  ],
  readingHistory: [String], // List of books read by the user
  recommendations: [String], // Recommended books for the user
  role: { type: String, default: 'user' }, // Can be 'user' or 'admin'
});

module.exports = mongoose.model('User', userSchema);

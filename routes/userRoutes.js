const express = require('express');
const { registerUser, loginUser , getUser ,adminLogin } = require('../controllers/userControllers');
const {verifyToken , verifyAdmin} = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin-login', adminLogin); // Admin login route

router.get('/user', verifyToken, getUser); // Protected route

module.exports = router;

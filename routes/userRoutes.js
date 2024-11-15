const express = require('express');
const { registerUser, loginUser , getUser } = require('../controllers/userControllers');
const verifyToken = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', verifyToken, getUser); // Protected route

module.exports = router;

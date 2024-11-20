const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use('/books', bookRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Welcome to the MERN Library API'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

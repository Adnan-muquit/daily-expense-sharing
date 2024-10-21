// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
require('dotenv').config();
const app = express();
app.use(express.json());

const url=process.env.MONGODB_URI;

// Connect to MongoDB
 mongoose.connect(url).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api', userRoutes);
app.use('/api', expenseRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.route');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/tasks', taskRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is healthy' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;

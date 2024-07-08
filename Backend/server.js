require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const { connect } = require('./config/db.config');
const metricsRoutes = require('./routes/Metrics');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connect();

// Use routes
app.use('/api', metricsRoutes);

// Error handling middleware
app.use(errorHandler);

function startServer(port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(5000);

require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const find = require('find-process');
const { exec } = require('child_process');
const { connect } = require('./config/db.config');
const metricsRoutes = require('./routes/Metrics');
const commercialOverviewRoutes = require('./routes/Commercial/CommercialOverviewRoutes');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connect();

// Use routes
app.use('/api', metricsRoutes);
app.use('/api', commercialOverviewRoutes);

// Error handling middleware
app.use(errorHandler);

const DESIRED_PORT = process.env.PORT || 5000;

const killProcessUsingPort = async (port) => {
  try {
    const list = await find('port', port);
    if (list.length > 0) {
      const pid = list[0].pid;
      process.kill(pid);
      console.log(`Killed process ${pid} using port ${port}`);
    }
  } catch (err) {
    console.error(`Error finding/killing process: ${err}`);
    throw err;
  }
};

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  server.on('error', async (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Attempting to kill process...`);
      try {
        await killProcessUsingPort(port);
        console.log(`Retrying to start server on port ${port}...`);
        startServer(port);
      } catch (killErr) {
        console.error(`Error killing process: ${killErr}`);
      }
    } else {
      console.error(`Error starting server: ${err.message}`);
    }
  });

  process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  });
};

startServer(DESIRED_PORT);

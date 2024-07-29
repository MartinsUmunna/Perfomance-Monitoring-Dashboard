const express = require('express');
const { sql } = require('../config/db.config');

const router = express.Router();

// Fetch metrics
router.get('/metrics', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Feeder`;
    res.json(result.recordset); // Send the fetched data as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching metrics' });
  }
});

// Test database connection (can be removed after verification)
router.get('/test-db-connection', async (req, res) => {
  try {
    await sql.connect();
    res.json({ message: 'Database connection successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed!', details: err.message });
  }
});

module.exports = router;

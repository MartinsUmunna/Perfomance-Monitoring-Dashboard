const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // e.g., 'MARTINS'
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  },
  port: 1433 // Only if not using an instance name
};

async function connect() {
  try {
    console.log('Attempting to connect with config:', JSON.stringify({...config, password: '[REDACTED]'}));
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Database connection failed: ', err);
    console.error('Error details:', err.stack);
  }
}

module.exports = {
  sql,
  connect,
};

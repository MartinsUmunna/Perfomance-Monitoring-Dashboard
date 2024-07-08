const { sql } = require('../config/db.config');

exports.getMetrics = async (req, res, next) => {
  try {
    const result = await sql.query`SELECT * FROM YourMetricsTable`;
    res.json(result.recordset);
  } catch (err) {
    next(err);
  }
};

// Add more controller functions as needed
// exports.getSpecificMetric = async (req, res, next) => {
//   try {
//     // Implementation
//   } catch (err) {
//     next(err);
//   }
// };
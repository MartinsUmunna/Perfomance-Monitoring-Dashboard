const { sql } = require('../../config/db.config');

const getCommercialOverview = async (req, res) => {
  const { year, month } = req.dateFilter; // Now using req.dateFilter

  try {
    const request = new sql.Request();
    if (year) request.input('Year', sql.Int, year);
    if (month) request.input('MonthName', sql.NVarChar(50), month);
    const result = await request.execute('GetCommercialOverviewMetrics');
    console.log('see result ', result);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching commercial overview metrics' });
  }
};

module.exports = {
  getCommercialOverview
};
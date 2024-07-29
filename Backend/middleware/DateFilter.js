const parseDateFilter = (req, res, next) => {
    const { year, month } = req.query;
    
    if (year && isNaN(parseInt(year))) {
      return res.status(400).json({ error: 'Invalid year format' });
    }
  
    const validMonths = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (month && !validMonths.includes(month)) {
      return res.status(400).json({ error: 'Invalid month format' });
    }
  
    req.dateFilter = {
      year: year ? parseInt(year) : null,
      month: month || null
    };
  
    next();
  };
  
  module.exports = parseDateFilter;
  
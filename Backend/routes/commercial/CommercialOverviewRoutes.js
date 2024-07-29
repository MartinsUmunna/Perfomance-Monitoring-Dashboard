const express = require('express');
const { getCommercialOverview } = require('../../controllers/Commercial/CommercialOverviewController');
const parseDateFilter = require('../../middleware/DateFilter');

const router = express.Router();

router.get('/commercial/overview', parseDateFilter, getCommercialOverview);

module.exports = router;

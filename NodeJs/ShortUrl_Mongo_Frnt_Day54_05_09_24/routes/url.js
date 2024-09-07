const express = require("express");
const router = express.Router();
const {
    generateShortId,
    handleAnalytics
} = require('../controllers/url');

router.post('/',generateShortId); // post(/url/ )
router.get('/analytics/:shortid',handleAnalytics);

module.exports = router;
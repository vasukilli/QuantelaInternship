const express = require("express");
const router = express.Router();

const {handleShortUrl,handleGetClicksAnalytics} = require('../controllers/url');

router.post('/',handleShortUrl);
router.get('/analytics/:shortid',handleGetClicksAnalytics);

module.exports = router;
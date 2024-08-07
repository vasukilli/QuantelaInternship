const express = require("express");
const router = express.Router();

const {handleGenerateShortUrl,handleClicksAndAnalics} = require('../controllers/url');

router.post('/',handleGenerateShortUrl);
router.get('/analyitics/:shortid',handleClicksAndAnalics);

module.exports = router;


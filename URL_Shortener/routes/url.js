const express = require("express");
const {handleGenerateNewShortURL, handleGetAnalytics, handleRedirect} = require("../controllers/url");
const router = express.Router();

router.post('/shorten', handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);

router.get('/:shortId', handleRedirect);

module.exports = router;
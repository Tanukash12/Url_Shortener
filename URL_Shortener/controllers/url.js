const shortid = require("shortid");
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ shortUrl: `http://localhost:5000/${shortID}`});
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length, 
        analytics: result.visitHistory
    });
}

async function handleRedirect(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });

    if(!entry){
        return res.status(404).send("Short URL not found.");
    }

    entry.visitHistory.push({ timestamp: Date.now() });
    await entry.save();

    res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleRedirect
}
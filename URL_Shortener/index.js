const express = require("express");
const {connectToMongoDB} = require("./connect");
const urlRoute = require("./routes/url");
const URL = require('./models/url');
const app = express();
const PORT = 5000;
const cors = require("cors");

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB Connected"));

app.use(express.json())

app.use(cors());

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    { $push: {
        visitHistory: {
            timestamp: Date.now(),
        }
    }
 }
);
if(!entry){
    return res.status(404).send("short url not found");
}
    res.redirect(entry.redirectURL);
});

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`) )
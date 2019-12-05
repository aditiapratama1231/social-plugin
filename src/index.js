require('dotenv').config()
const express = require('express');
const app = express()
const port = 8000;
const facebook = require('./facebook')

app.get("/feeds", async (req, res) => {
    try {
        const feeds = await facebook.GetUserFeeds
        res.send(feeds.data)
    } catch (error) {
        res.send({
            "success": false,
            error 
        })
    }
})

app.listen(port, () => {
    console.log("listening on port : " + process.env.PORT);
})
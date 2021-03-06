require('dotenv').config()
const express = require('express');
const app = express()
const facebook = require('./facebook')

const port = process.env.PORT;

app.get("/feeds", async (req, res) => {
    try {
        page = req.query.page
        limit = req.query.limit

        const feeds = await facebook.GetUserFeeds(page, limit)
        res.send(feeds.data.feed)
    } catch (error) {
        res.send({
            "success": false,
            error 
        })
    }
})

app.listen(port, () => {
    console.log("listening on port : " + port);
})
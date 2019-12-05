const axios = require('axios');
require('dotenv').config()

let GetUserFeeds = async () => {
    try {
        userId = process.env.FACEBOOK_USER_ID
        feedUrl = process.env.FACEBOOK_HOST + userId + "/feed"
        getToken = await GetAccessToken()
        
        access_token = getToken.data.access_token
        
        return await axios.get(feedUrl, {
            params: {
                access_token: access_token
            }
        });
    } catch (error) {
        throw error
    }
}

let GetAccessToken = async () => {
    try {
        tokenUrl = process.env.FACEBOOK_HOST + "oauth/access_token"
        client_id = process.env.FACEBOOK_CLIENT_ID
        client_secret = process.env.FACEBOOK_CLIENT_SECRET

        return await axios.get(tokenUrl, {
            params: {
                client_id: client_id,
                client_secret: client_secret,
                grant_type: "client_credentials"
            }
        })
    } catch (error) {
        throw error
    }
}

module.exports.GetUserFeeds = GetUserFeeds();
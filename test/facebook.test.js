const facebook = require("../src/facebook")

test("get facebook access_token", async () => {
    const access_token = await facebook.GetAccessToken()
    expect(Object.keys(access_token.data)).toEqual(['access_token', 'token_type']);
})

test("get user feeds", async () => {
    const feeds = await facebook.GetUserFeeds(1, 10)
    expect(Object.keys(feeds.data.feed)).toEqual(['data', 'paging']);
})
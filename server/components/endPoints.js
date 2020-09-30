module.exports = {
    testingEndPoints: {
        BBC__HTML__TEST: `https://cdn.jsdelivr.net/gh/kabeer11000/sample-response/news/parseTests/bbcParse.html`,
    },
    bySource: (src = "cnn") => `https://saurav.tech/NewsAPI/everything/${src}.json`,
    byCatagory: (countryCode, catagory) => `https://saurav.tech/NewsAPI/top-headlines/category/${catagory.toLowerCase()}/${countryCode.toLowerCase()}.json`,
};

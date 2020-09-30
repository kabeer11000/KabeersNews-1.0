var express = require('express');
var router = express.Router();
const axios = require("axios");
const endPoints = require("../../components/endPoints");
const bfj = require("bfj");
var Crawler = require("crawler");
const cheerio = require('cheerio');
const tf = require('@tensorflow/tfjs-node');
const universalSentenceEncoder = require("@tensorflow-models/universal-sentence-encoder");
const fuse = require("fuse.js");
const { agnes } = require('ml-hclust');

/* GET users listing. */
const strip_tags = (t) => t.replace(/(<([^>]+)>)/gi, "");

router.get("/", (req, res) => {

    const tree = agnes(data, {
        method: 'ward',
    });
    res.json();
});

module.exports = router;

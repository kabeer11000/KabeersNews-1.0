var express = require('express');
var router = express.Router();
const axios = require("axios");
const endPoints = require("../../components/endPoints");

/* GET users listing. */
router.get('/', function(req, res, next) {
    axios.get(endPoints.bySource())
        .then(r => res.json(r));
});

module.exports = router;

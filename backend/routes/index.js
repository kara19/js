var express = require('express');
var router = express.Router();

const fs = require('fs');

let rawdata = fs.readFileSync('./aboutme.json');


router.get('/', function(req, res, next) {
    let me = JSON.parse(rawdata);
    const data = {
        data: {
            name: me.name,
            city: me.city,
            description: me.description
        }
    };

    res.json(data);
});

module.exports = router;
var express = require('express');
var router = express.Router();


router.get("/:msg", (req, res) => {
    if (req.params.msg == 2) {
        outputData = "https://gitter.im/dbwebb-se/jsramverk";
    } else {
        outputData = req.params.msg;
    }
    
    const data = {
        data: {
            msg: outputData
        }
    };
    res.json(data);
});


module.exports = router;
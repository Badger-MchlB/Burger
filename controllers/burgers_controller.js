const express = require('express');
const router = express.router();
const burger = require("../models/burger.js");

router.get('/', (req, res) => {
    burger.all((data)=>{
        let hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});



module.exports = router;
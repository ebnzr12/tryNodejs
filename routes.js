var express = require("express");
var router = express.Router();

router.get('/', function(req,res){
    console.log("hello gais. nama saya ebenezer");
    res.render("index");
});

module.exports = router;
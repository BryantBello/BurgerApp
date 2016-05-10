var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var app = express();



//create routes
router.get('/', function(req, res) {
    actions.showBurgers(function(burger_data) {
        res.render('index', { burger_data });
    });
});

router.post("/create", function(req, res) {
    actions.addBurger(req.body.entry, function(result) {
        console.log(result);
        res.redirect("/");
    });
});



module.exports = router;

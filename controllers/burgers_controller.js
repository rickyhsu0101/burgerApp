var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.allBurgers(function(result){
        var hbsOb = {
            burgers: result
        };
        console.log(hbsOb);
        res.render("index", hbsOb);
    });
});
router.post("/api",function(req, res){
    burger.addBurger(req.body.burgerDesc, function(result){
        console.log(result);
        res.end();
    });
});
router.put("/api", function(req, res){
    console.log("in route");
    burger.devourBurger(req.body.id, function(result){
        console.log(result);
        res.end();
    });
});

module.exports  = router;
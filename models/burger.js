var orm = require("../config/orm.js");
var burger = {
    allBurgers: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    addBurger: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    devourBurger: function(id, cb){
        orm.updateOne("burgers", "devoured", true, id, function(res){
            console.log("devoured");
            cb(res);
        });
    }
};

module.exports = burger;
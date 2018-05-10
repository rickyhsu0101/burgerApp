var connection = require("./connection.js");

function printQuestion(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(obj){
    
}
var orm = {
    selectAll: function(table, cb){
        console.log("select all");
        var query = "SELECT * FROM ??;";
        connection.query(query, [table], function(err, result){
            console.log(result);
            if(!err){
                cb(result);
            }
        });
    },
    insertOne: function(table, col, val, cb){
        var query = "INSERT INTO ?? (??) VALUES(?);";

        connection.query(query, [table, col, val], function(err, result){
            if(!err){
                cb(result);
            }
        });
    },
    updateOne: function(table, col, val, id, cb){
        console.log("in update");
        var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query, [table, col, val, id], function(err, result){
            console.log(
                result
            );
            if(!err){
                
                cb(result);
            }else{
                console.log(err);
            }
            
        });
    }
}

module.exports = orm;
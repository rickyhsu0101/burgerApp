var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public/"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(process.env.PORT||5000, function(){
    console.log("listening on " + 5000);
});
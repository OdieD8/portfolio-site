var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = require("cors");
                      
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("client"));

var port = 8800;

app.listen(port , function() {
    console.log("listening on port:", port);
});
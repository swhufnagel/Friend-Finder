var express = require("express");
var path = require("path");
var app = express();
var routes = {

survey: function(){
    app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
},

home: function(){
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
}


}
module.exports = routes;
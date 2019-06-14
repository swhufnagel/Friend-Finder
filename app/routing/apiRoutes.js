var data = require("../data/friends.js");
var express = require("express");
var app = express();
var routes = {

friends: function(){

    app.get("/api/friends",function(req,res){
    console.log(data);
    res.json(data);
});

}

}

module.exports = routes;
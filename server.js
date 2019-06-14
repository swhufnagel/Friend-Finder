var express = require("express");
var path = require("path");
var data = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js"); 
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes.survey();
htmlRoutes.home();
apiRoutes.friends();
app.get("/api/friends",function(req,res){
    console.log(data);
    res.json(data);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
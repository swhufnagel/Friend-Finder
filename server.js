var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app); 
// app.use('/static', express.static('static'));
app.use(express.static(__dirname + '/static'));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
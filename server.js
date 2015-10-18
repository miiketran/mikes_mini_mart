var express = require("express");
var path = require("path");
var app = express();
app.set('port', (process.env.PORT || 5000));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
require('./config/mongoose.js');
require("./config/routes.js")(app);
app.listen(app.get('port'), function(){
  console.log("Node app is running on port", app.get('port'));
});
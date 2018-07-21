var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
var apiKey = "2172ba9d-ee18-4320-836f-ac58eb646078";
var Guardian = require('guardian-js');
var api = new Guardian(apiKey, false);


app.get("/", function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log("Serve's Up Dude!");
});

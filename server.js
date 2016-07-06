var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require("fs");
var jsonParser = bodyParser.json()


app.get('/listUsers', function (req, res) {
   	console.log("get method" );
    res.send("get method");
 })

app.post('/addUser', jsonParser, function (req, res) {
	console.log("posted data : "+ req.body.name);
    res.send("post method");
 })

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
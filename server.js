var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
app.use(express.static(__dirname + ''));
app.use(bodyParser.json());

app.get('*', function(req, res) {
	var options = { root: __dirname };
    res.sendFile('index.html',options);
});

var port = "3002";
app.listen(port);
console.log("Web server listening on port: " + port);
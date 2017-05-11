var express = require('express');
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/wissdb", function(err, db) {
    if(!err) {
        console.log("Connected to WissDataBase");
    }
});
var app = express();
app.use(express.static(__dirname+'/public'));
app.all('/*', function(req, res) {
    res.sendfile('public/index.html');
});
app.listen(3000);
console.log('Running on port 3000...');

/*// to close navbar toggle after clicking links in it (mobile view)
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});*/
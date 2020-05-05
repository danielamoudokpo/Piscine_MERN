
var express  = require('express');
var app = express();
fs = require('fs');

app.set('view engine','ejs');

app.engine('html', require('ejs').renderFile);

app.get('/name',function(req,res) {
    var data = 'Hello Unknow';
    res.render('index',{data}); 
});

app.get('/name/:name',function(req,res) {
    var name = req.params.name;
    var data = 'Hello '+name;
    res.render('index',{data}); 
});


app.listen(4242);


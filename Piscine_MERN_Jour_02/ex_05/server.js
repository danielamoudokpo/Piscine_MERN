var express  = require('express');

var fs = require ('fs');

var app = express();

app.set('view engine','ejs');

    app.get('/name/', function(req,res) {
        data = 'Hello Unknow, I dont know your age' ; 
        res.render('index',{data});
    })

    app.get('/name/:name',function(req,res) {
        var name = req.params.name;
        var age = req.query.age;
        var data = 'Hello '+name+' you have '+age+' yo' 
        res.render('index',{data}); 
    
    });


app.listen(4242);


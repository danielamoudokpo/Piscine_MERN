var express  = require('express');

var fs = require ('fs');

var app = express();

app.set('view engine','ejs');

app.engine('html', require('ejs').renderFile);



// var path = require('path');

app.get('/', function(req, res){
    res.sendFiles(__dirname + '/index.html');
})

// fs.readFile('./index.html',function(err,data) {
//     if (err) {
//         throw err;
//     }
    // app.set('views', path.join(__filename,'views'));
    // app.engine('html', require('ejs').renderFile);
    app.get('/name/:name/:age',function(req,res) {
        // res.setHeader('Content-Type', 'text/html');
        var name = req.params.name;
        var age = req.params.age;

        res.render('index.html',{name:name},{age:age},); 

        // res.send('your name is '+name+' you\'re '+age+' old' );

        
        
        console.log(name,age);

    
    });

// })

app.listen(4242);


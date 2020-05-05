process.env.NODE_ENV= "development"

var express  = require('express');
var app = express();

app.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/plain');

    res.send('Hello World ');
    
})
app.listen(4242);

// res.setHeader('Content-Type', 'text/plain');
   


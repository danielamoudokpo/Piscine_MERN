process.env.NODE_ENV= "development"

var express  = require('express');

var app = express();

app.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/plain');

    res.send('Great! It Works.');
    
})
app.listen(4242);


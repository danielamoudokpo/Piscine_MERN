var express  = require('express');
var app = express();
fs = require('fs');


fs.readFile('./index.html',function(req,html) {
    
    app.get('/',function (req,res) {
        res.setHeader('Content-Type', 'text/html');
    
        res.send(html);
        
    })

})



app.listen(4242);


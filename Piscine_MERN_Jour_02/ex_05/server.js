var express  = require('express');
var fs = require ('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27042/";

let dbName = 'mern-pool';
let db

// connect
MongoClient.connect(url,{ useUnifiedTopology: true },function (err, client){
    if (err){
      console.error("Connection Failed");
    }else{
      console.log("Connected successfully");
    }
     db = client.db(dbName);
    client.close();

  })

  var app = express();

  app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));



app.set('view engine','ejs');

  

    app.post('/sign_up',function (req,res) {

        var lastname = req.query.lastname;
        var firstname = req.query.firstname;
        var email = req.query.email;
        var phone = req.query.phone;
        // var validated = req.query.validated;
        // var admin = req.query.admin;

        var data = {
            lastname : lastname,
            firstname : firstname,
            email : email,
            phone : phone,
            validated : "validated",
            admin : true,
            
        }
        console.log(data);
        db.collection('students').insertOne(data,function(err, collection){ 
            if (err) throw err; 
            console.log("Record inserted Successfully"); 
                  
        }); 

    })


    app.get('/',function(req,res) {
        // var name = req.params.name;
       

        res.render('index'); 
    
    });

// app.use(bodyParser.json());
app.listen(3000);



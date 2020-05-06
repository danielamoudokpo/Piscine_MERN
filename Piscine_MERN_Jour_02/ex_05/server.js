var express  = require('express');
var fs = require ('fs');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27042/";

let dbName = 'mern-pool';
let db

var app = express();

// connection
MongoClient.connect(url,{ useUnifiedTopology: true }, function (err, client){
    if (err){
      console.error("Connection Failed");
    }else{

      console.log("Connected successfully");
    }
    db = client.db(dbName);

    // client.close();

})
    app.use(bodyParser.json()); 
    app.use(express.static('public')); 
    app.use(bodyParser.urlencoded({ extended: true}));

    app.set('view engine','ejs');

    app.get('/',function(req,res) {
        
        res.render('index'); 
    });

    app.post('/sign_up', function (req,res) {

        var lastname = req.body.lastname;
        var firstname = req.body.firstname;
        var email = req.body.email;
        var phone = req.body.phone;
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
        // res.send();
        console.log(data);
        db.collection('students').insertOne(data,function(err, collection){ 
            if (err){
                console.error("Failed to save the collection"); 
            } else{
                console.log("Collection saved."); 
            }
            // return res.redirect('signup_success.html'); 

        }); 

    })

// app.use(bodyParser.json());
app.listen(3000);



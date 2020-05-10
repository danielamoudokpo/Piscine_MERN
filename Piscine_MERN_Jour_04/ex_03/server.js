var express  = require('express');
var fs = require ('fs');
const bodyParser = require('body-parser');

let UserController = require("./src/user/userController");

let BilletController = require("./src/billets/billetController");


// ALL ROUTE THAT START WITH users
const users = require('./src/user/userRouter');

// ALL ROUTE THAT START WITH /:login

let billets = require("./src/billets/billetRouter");

// var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27042/";

let dbName = 'mern-pool';

// let db

var app = express();
app.set('view engine','ejs');
app.use(bodyParser.json()); 
// app.use(express.static('public')); 
// app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/test',(req,res)=>{
    res.send('hello im test');
})

// app.post('/test/:name',(req,res)=>{
//     name = req.params.name;
//     res.send('hello test ' + name);
// })


UserController.connect(url,dbName);

    // use router for gGET AND POST '/USER'
app.use('/user',users);

app.use('/',billets);




app.listen(5000);



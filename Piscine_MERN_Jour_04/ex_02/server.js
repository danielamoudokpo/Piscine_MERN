var express  = require('express');
var fs = require ('fs');
const bodyParser = require('body-parser');

let UserController = require("./src/user/userController");

// ALL ROUTE THAT START WITH users
const users = require('./src/user/userRouter');

// var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27042/";

let dbName = 'mern-pool';

// let db

var app = express();
app.set('view engine','ejs');
app.use(bodyParser.json()); 
// app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true}));

UserController.connect(url,dbName);

    // use router for gGET AND POST '/USER'
app.use('/user',users);

app.listen(5000);



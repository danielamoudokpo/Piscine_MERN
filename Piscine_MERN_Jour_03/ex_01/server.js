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




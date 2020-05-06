const express = require('express');
const fs = require('fs');
const app = express();

var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27042/";

// app.use(bodyParser.json());
let dbName = 'mern-pool';

// connect
MongoClient.connect(url,{ useUnifiedTopology: true },function (err, client){
    if (err){

      console.error("Connection Failed");
    }else{
      
      console.log("Connected successfully");

    }
    const db = client.db(dbName);

  })

  


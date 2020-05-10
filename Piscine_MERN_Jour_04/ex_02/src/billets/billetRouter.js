const express = require('express');
const jwt = require('jsonwebtoken');
let ObjectId = require('mongodb').ObjectId;
const  app = express();
const router = express.Router();
MongoClient = require('mongodb').MongoClient;
const billetController = require("../billets/billetController");

// const db = billetController.getDb() ;
// console.log(db);

        // CONNECTION 
    let db;

    const url = "mongodb://127.0.0.1:27042/";
    let dbName = 'mern-pool';

    MongoClient.connect(url,{ useUnifiedTopology: true },(err, client)=>{
        db = client.db(dbName);
    });

    Billet = require('../billets/billetModel')

    router.get("/hello",(req,res)=>{

        return"test";
        
    })



    router.post("/login", (req,res)=>{

        console.log("billet");
        // console.log(req.body.user_id);
        
        owner = req.body.owner
        title = req.body.title
        content = req.body.content
        
        console.log(owner);
        
        if ( title && content ) {
            // console.log("dan");
            let newBillet = new Billet(
                 {
                     owner : owner,
                     title : title,
                     content : content,
                 }
             )
             console.log("test");
            
            billetController.send(db,newBillet);
        }
    });

module.exports = router;

class BilletController{

    constructor(){

        this.express = require('express');
        this.fs = require ('fs');
        this.mongoose = require('mongoose');
        this.bodyParser = require('body-parser');
        this.MongoClient = require('mongodb').MongoClient;
        this.crypto = require('crypto');

    }

    send(db,data){
        console.log(data);
        console.log("here");
        

        db.collection('billets').insertOne(data,(err, collection)=>{ 
            if (err){
                console.error("Failed to save the collection"); 
            } else{
                console.log("Collection saved."); 
            }
            // return res.redirect('signup_success.html'); 
        });

    }
    

} 

module.exports = new BilletController();
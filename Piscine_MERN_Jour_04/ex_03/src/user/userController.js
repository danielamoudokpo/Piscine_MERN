
class UserController{

    constructor(){

        this.db;
        this.express = require('express');
        this.fs = require ('fs');
        this.mongoose = require('mongoose');
        this.bodyParser = require('body-parser');
        this.MongoClient = require('mongodb').MongoClient;
        this.crypto = require('crypto');

    }

    connect(url,dbName){

        console.log(url,dbName);
        
        this.MongoClient.connect(url,{ useUnifiedTopology: true },(err, client)=>{
            if(err){
              console.error("Connection Failed");
            }else{
              console.log("Connected successfully");
            }

            this.db = client.db(dbName);

        })
    }

    send(data){

        console.log(data);

        data.password = this.crypto.createHash('sha1').update(JSON.stringify(data.password)).digest('hex')

        this.db.collection('users').insertOne(data,(err, collection)=>{ 
            if (err){
                console.error("Failed to save the collection"); 
            } else{
                console.log("Collection saved."); 
            }
            // return res.redirect('signup_success.html'); 
        });

    }


    async login(email,password){
        var hashP = this.crypto.createHash('sha1').update(JSON.stringify(password)).digest('hex')

            return new Promise ((resolve,reject)=>{

                this.db.collection('users').findOne({ email: email},(err, user)=> {
                    // console.log('User found ');
                    // console.log(user);
                    
                    // If user not found   
                    if(err) {
                        console.log('THIS IS ERROR RESPONSE')
                        // res.json(err)
                    } 
                    if (user && user.password === hashP){
                        // console.log('You\'re connected')
                        resolve(user)
                        //   res.(user);
                    } else {
                        console.log("Incorrect Email or password");
                        resolve("ko")
                    } 
                    
                    // reject(err);
                    
                });
            })

    }
    

} 

module.exports = new UserController();
const express = require('express');
const  app = express();
const router = express.Router();
MongoClient = require('mongodb').MongoClient;
const UserController = require("../user/userController");

// const db = UserController.getDb() ;
// console.log(db);

        // CONNECTION 
    let db;

    const url = "mongodb://127.0.0.1:27042/";
    let dbName = 'mern-pool';
    MongoClient.connect(url,{ useUnifiedTopology: true },(err, client)=>{
        db = client.db(dbName);
    });

    User = require('../user/userModel')

    router.get('/register',function (req,res) {
        var data = "";
        res.render('index',{data});
    })

    router.post("/register", (req,res)=>{

        // console.log(req.body);
        
        login = req.body.login
        email = req.body.email
        password = req.body.password
        passwordConfirm = req.body.passwordConfirm

        var checkLogin;
        var checkMail;

        if (login.length >= 5) {

            return  new Promise( async (resolve, reject)=>{
                let user = await db.collection('users').findOne({ 
                    email
                 });
                    // resolve(console.log(user));
                if (!user) {
                    // checkLogin = user.login;
                    // checkMail = user.email 
                    // console.log([
                    //     password, passwordConfirm
                    // ]);
                    
                    if ( password === passwordConfirm ) {
                       let newUser = new User(
                            {
                                login : login,
                                email : email,
                                password : password,
                                type : false
                            }
                        )
                        console.log("test");
                        
                        UserController.send(newUser)
                        
                        // resolve(res.redirect('login'));
                        resolve(res.send('login'));
                    
                        }
                        else {
                            var data = " Password does't match ";                        
                            // res.status(401).send(data);
                            res.send(data);

                        } 
                       
                }else{
                    var data = "email or login already exist";
                    res.send(data);
                    // res.status(401).send(data);


                }
        
            }) 
        }else{
            var data = " login must be greater than 5";
            res.send(data)
            // res.render('index',{data})
        }

    })


    router.get('/login',function (req,res) {
        var data ="";
        res.render('login',{data});

    })

    router.post('/login', async (req,res)=>{
        email = req.body.email;
        password = req. body.password;

        let result = await UserController.login(email,password)

        console.log(result);
        var data ="";
        if (result === "ko") {

            data = " wrong email or password"
            // res.render('login',{data})
            res.send(data)
           
        }else{
            res.send("hello "+ result)
        }
        
    })
    

module.exports = router;
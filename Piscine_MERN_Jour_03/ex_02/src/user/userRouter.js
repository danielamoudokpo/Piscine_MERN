const express = require('express');
const  app = express();
const router = express.Router();

const UserController = require("../user/userController");

    User = require('../user/userModel')

    router.get('/register',function (req,res) {
        
        res.render('index');
    })

    router.post("/register",(req,res)=>{

        login = req.body.login
        email = req.body.email
        password = req.body.password
        passwordConfirm = req.body.passwordConfirm

        console.log(passwordConfirm);
        
        if (password == passwordConfirm) {
            newUser = new User(
                {
                    login : login,
                    email : email,
                    password : password,
                    type : false
                }
                
            )
        }else{

            var data = "password not the same";
            res.render('index',{data})
        }

        UserController.send(newUser)

        // res.sendStatus(200);

        return res.redirect('login'); 

    })

    router.get('/login',function (req,res) {
        
    res.render('login');
    })
    

module.exports = router;
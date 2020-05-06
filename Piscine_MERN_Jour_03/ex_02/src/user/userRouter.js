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

        newUser = new User(
            {
                login : login,
                email : email,
                password : password,
                type : false
            }
            
        )
        UserController.send(newUser)
        return res.redirect('login'); 
    })

    router.get('/login',function (req,res) {
        
    res.render('login');
    })
    

module.exports = router;
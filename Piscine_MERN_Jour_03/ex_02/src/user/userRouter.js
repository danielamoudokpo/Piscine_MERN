const express = require('express');
const  app = express();
const router = express.Router();

const UserController = require("../user/userController");

    User = require('../user/userModel')

    router.get('/register',function (req,res) {
        var data = "";

        res.render('index',{data});
    })

    router.post("/register",(req,res)=>{

        login = req.body.login
        email = req.body.email
        password = req.body.password
        passwordConfirm = req.body.passwordConfirm

        // console.log(passwordConfirm);
        
        if (password == passwordConfirm) {
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

        }else{
            var data = "password not the same";
            res.render('index',{data})
        }
        
        // res.sendStatus(200);
    })


    router.get('/login',function (req,res) {
        
    res.render('login');
    })

    router.post('/login',(req,res)=>{

        // check("email", "Please enter a valid email").isEmail(),
        email = req.body.email;
        password = req. body.password;

        UserController.login(email,password)
       
    })
    

module.exports = router;
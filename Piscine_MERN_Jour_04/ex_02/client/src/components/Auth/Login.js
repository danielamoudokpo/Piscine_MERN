import React, { Component } from "react";
import axios from 'axios';

import {
    Container
}from 'reactstrap';
import { text } from "body-parser";


 class Login extends Component {

    loginUser(e) {
        
        e.preventDefault();

        let email = this.refs.email.value;
        let password = this.refs.password.value;

        // console.log(email,password);
         

        if( email.length == 0 || password.length == 0 ){ 

            console.log('enter email and password');
            
        }else{
            console.log("good");
            
            axios.post('http://localhost:5000/user/login',{
                
                email :this.refs.email.value,
                password :this.refs.password.value

            }).then((res)=>{
                console.log(res);
                
            }).catch((err)=>{
                console.log(err);
                
            })

        }   

    }


    render() {
        return (
            <Container>
                <form className='form' onSubmit = {this.loginUser.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" ref="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref="password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

            </Container>
        );
    }
}

export default Login;
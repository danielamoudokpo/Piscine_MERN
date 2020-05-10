import React, { Component } from "react";
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom'

import {
    Container
}from 'reactstrap';

import { text } from "body-parser";

    
 class Login extends Component {

    
    constructor(){

        super();
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();

        this.state ={
            email: null,
            password : null,
            userLogin : false,
            store: null
        }
    }

    loginUser(e) {
        
        e.preventDefault();

        let email = this.refs.email.value;
        let password = this.refs.password.value;

        // console.log(email,password);
        if(email.length === 0 || password.length === 0 ){ 

            console.log('enter email and password');
            
        }else{            

            this.Auth.login(email,password)
            .then(res=>{
                console.log(res);
               
                if (res !== "wrong email or password") {
                    this.props.history.push("/")
                
                } 
            });
        }   
        
    }


    render() {

        if (this.Auth.loggedIn() === "oui") {

            this.props.history.push('/');    
        }

        return (
            
            <Container>
            
                {/* { this.Auth.getProfile()} */}
                    
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
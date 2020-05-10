import React, { Component  } from 'react';
import axios from 'axios';
import AuthService from './AuthService'
import {
    Container
}from 'reactstrap';

class Register extends Component {

    constructor(){

        super();
        this.Auth = new AuthService();

      
    }

        submitUser(event){
            event.preventDefault()

            if (this.refs.password.value !== this.refs.passwordConfirm.value ) {
                        console.log("not match password");
                        
            }else{
                console.log('good');
                
                axios.post('http://localhost:5000/user/register',{

                    login : this.refs.login.value,
                    email : this.refs.email.value,
                    password: this.refs.password.value,
                    passwordConfirm: this.refs.passwordConfirm.value
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                    // throw err
                })
            }
            // confirmPassword : his.refs.login.value
        }

        render(){
            if (this.Auth.loggedIn() === "oui") {
                this.props.history.push("/")
            }
            return (
                <Container>
                    <form className="form" onSubmit = {this.submitUser.bind(this)}>
                        <h3>Sign Up</h3>
    
                        <div className="form-group" >
                            <label>Login</label>
                            <input type="text" className="form-control" ref="login" placeholder="Login"  required />
                        </div>
    
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" ref="email" placeholder="Enter email" required />
                        </div>
    
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref="password" placeholder="Enter password"  required  />
                        </div>
    
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input  type="password" className="form-control" ref="passwordConfirm" placeholder="Confirm password" required  />
                        </div>
    
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
                </Container>
            );
        }         
    
}

export default Register;
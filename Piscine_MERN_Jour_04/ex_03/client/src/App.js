import React, {Component} from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import AuthService from "./components/Auth/AuthService"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import AppNavbar from './components/AppNavbar';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Billet from "./components/billets/Billet"

class App extends Component {

  constructor(){

    super();

    // this.us = [];
    this.Auth = new AuthService();
    this.state ={
    currentUser : null
    }
  }

  componentWillMount() {
    if (this.Auth.loggedIn() === "oui") {
      
      let user = this.Auth.getProfile();
      console.log(user.userLogin.login);

      if (user) {
        
        this.setState({
          currentUser: user.userLogin.login
         
        });
      }
    }
    
    console.log(this.state.currentUser);
    
   
  }

  render(){
    return (
      <div className="App">
        
        <Router>
          
          <Route path="/" render={(props) => <AppNavbar {...props} currentUser={this.state.currentUser}  />}
 />
              <h1> welcome {this.state.currentUser} </h1>
            <Route path="/user/register" component={Register} />

            <Route path="/user/login" component={Login} />

            <Route path="/login" component={Billet} />

    
        </Router>
      </div>
    );
  }
}

export default App;

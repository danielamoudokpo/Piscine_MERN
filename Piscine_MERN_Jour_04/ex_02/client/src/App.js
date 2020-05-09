import React from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import AppNavbar from './components/AppNavbar';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";



function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppNavbar/> */}
        <Route path="/" component={AppNavbar} />

          <Route path="/user/register" component={Register} />

          <Route path="/user/login" component={Login} />
  
      </Router>
    </div>
  );
}

export default App;

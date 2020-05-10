import React , { Component } from 'react';
import AuthService from './Auth/AuthService'
// import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
}from 'reactstrap';


class AppNavbar extends Component {

       
        constructor(){

            super();
            this.Auth = new AuthService();
    
            this.state = {
                isOpen: false
            }
        }

        toggle = () => {
            this.setState ({
                isOpen: !this.state.isOpen
            });
        }

        render (){
              if (this.Auth.loggedIn() === "oui") {
                    // this.props.history.push("/")

                }

                const {currentUser} = this.props;

            return (
                <div>

                    <Navbar color="dark" dark expand="sm" className= "mb-5">
                        <Container>
                            <NavbarBrand href="/" > MERN </NavbarBrand>
                            <NavbarToggler onclick={this.toggle}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className= "ml-auto" navbar>
                                       
                                        {currentUser == null && (
                                             <NavItem>
                                             <NavLink href="/user/register">Register</NavLink>
                                             </NavItem>
                                        )}
                                        {currentUser == null && (
                                            <NavItem>
                                                <NavLink href="/user/login">Login</NavLink>
                                             </NavItem>
                                        )}

                                        {currentUser !== null && (
                                            <NavItem>
                                                <NavLink href="#" onClick={this.Auth.logout}>Logout</NavLink>
                                            </NavItem>
                                        )}
                                       
                                    </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>

                </div>
            );

        }

}


export default AppNavbar;


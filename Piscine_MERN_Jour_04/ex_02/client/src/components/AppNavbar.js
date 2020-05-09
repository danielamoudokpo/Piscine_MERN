import React , { Component } from 'react';
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

        state = {
            isOpen: false
        }

        toggle = () => {
            this.setState ({
                isOpen: !this.state.isOpen
            });
        }

        render (){
            return (
                <div>

                    <Navbar color="dark" dark expand="sm" className= "mb-5">
                        <Container>
                            <NavbarBrand href="/" > MERN </NavbarBrand>
                            <NavbarToggler onclick={this.toggle}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className= "ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="/user/register">Register</NavLink>

                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/user/login">Login</NavLink>
                                        </NavItem>
                                    </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>

                </div>
            );

        }

}


export default AppNavbar;


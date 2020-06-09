import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import '../css/Menu.css';

const Menu = () => {

    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark">
                {/*<Navbar.Collapse className="justify-content-center">*/}
                    <Nav.Brand href="/" onClick={handleClick}><h1>SMASY</h1></Nav.Brand>
                {/* </Navbar.Collapse> */}
                {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    <Nav className="app-nav">
                        { this.props.authenticated ? (
                            <div>
                                <Nav.Link herf="/profile">Profile</Nav.Link>
                                <a onClick={this.props.onLogout}>Logout</a>
                            </div>
                        ): (
                            <div>
                                <Nav.Link herf="/login">Login</Nav.Link>
                                <Nav.Link herf="/signup">Signup</Nav.Link>
                            </div>

                        )}
                    </Nav>
                {/*</Navbar.Collapse>*/}
            </Navbar>
        </div>
    );
};
const handleClick = () => {
    console.log("Click");
}
export default Menu;
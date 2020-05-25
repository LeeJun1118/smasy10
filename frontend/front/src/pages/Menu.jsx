import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

const Menu = () => {

    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark">
                {/*<Navbar.Collapse className="justify-content-center">*/}
                    <Navbar.Brand href="/" onClick={handleClick}><h1>SMASY</h1></Navbar.Brand>
                {/*</Navbar.Collapse>*/}
                {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
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
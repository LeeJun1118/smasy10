import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import '../css/Menu.css';

class MenuComponent extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" sticky="top" variant="dark">
                    <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand href="/"><h1>SMASY</h1></Navbar.Brand>
                    </Navbar.Collapse>
                    {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                    <Nav className="app-nav">
                        { this.props.authenticated ? (
                            <span>
                                <NavLink className="link" to="/profile">Profile</NavLink>
                                <a onClick={this.props.onLogout}>Logout</a>
                            </span>
                        ): (
                            <span>
                                <Link className="link" to="/login">Login</Link>
                                <Link className="link" to="/signup">Signup</Link>
                            </span>

                        )}
                    </Nav>
                    {/*</Navbar.Collapse>*/}
                </Navbar>
            </div>
        )
    }
}

export default MenuComponent
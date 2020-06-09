import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import '../css/Menu.css';

class MenuComponent extends Component {

    render() {
        return (
            <div>
                <Navbar bg="primary" sticky="top" variant="dark">
                    {/*<Navbar.Collapse className="justify-content-center">*/}
                    <Navbar.Brand href="/"><h1>SMASY</h1></Navbar.Brand>
                    {/*</Navbar.Collapse>*/}
                    {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="app-nav">
                        { this.props.authenticated ? (
                            <span>
                                <NavLink className="link" to="/profile">Profile</NavLink>
                                <Link className="link" onClick={this.props.onLogout}>Logout</Link>
                            </span>
                        ): (
                            <span>
                                <NavLink className="link" to="/login">Login</NavLink>
                                <NavLink className="link" to="/signup">Signup</NavLink>
                            </span>

                        )}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MenuComponent
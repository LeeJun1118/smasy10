import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import '../css/Footer.css';

const Footer = () => {

    return (
        <div className="Footer">
            <Navbar bg="primary"  variant="light" sticky="bottom" >
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text id="dev">
                    developer : Jun Lee, Bomin Kim
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Footer;
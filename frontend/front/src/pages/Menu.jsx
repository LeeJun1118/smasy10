import React from 'react';
import {Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginComponent from "../component/LoginComponent";
import MainComponent from "../component/MainComponent";
import HomeComponent from "../component/HomeComponent";

const Menu = () => {

    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark">
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand href="/" onClick={handleClick}><h1>SMASY</h1></Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Brand  href="/login" id="mylogin">로그인</Navbar.Brand>
            </Navbar>
        </div>
    );
};
const handleClick = () => {
    console.log("Click");
}
export default Menu;
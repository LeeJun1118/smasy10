import React, {Component} from "react";
import {Button, Navbar, Nav, NavDropdown, Dropdown, DropdownButton,ButtonGroup, Form} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import MainComponent from './MainComponent'
import LoginComponent from './LoginComponent'
import HomeComponent from './HomeComponent'
import KakaoLogin from "../pages/KakaoLogin";

class TopMenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedValue:'node'}
    }
    handleClick = () => {
        console.log("Click");
    }
    handleSelectChange(event){
        this.setState({selectedValue:event.target.value})
    }
    state = {
        date: new Date(),
    }
    onDateChange = date => {
        this.setState({date})
    }
    onDateClick = () =>{

    }

    render() {
        return (
            <Router>
                <Navbar bg="dark" sticky="top" variant="dark">
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Brand href="/home"><h1>SMASY</h1></Navbar.Brand>
                    </Navbar.Collapse>
                    <Navbar.Brand  href="/login" id="mylogin">로그인</Navbar.Brand>
                </Navbar>
                {/*<Navbar bg="dark"*/}
                {/*        variant="dark">*/}
                {/*    <Nav>*/}
                {/*    <NavDropdown title="종목" id="collasible-nav-dropdown" value="navdrop">*/}
                {/*        <NavDropdown.Item onClick={this.handleClick}>축구</NavDropdown.Item>*/}
                {/*    </NavDropdown>*/}
                {/*    <NavDropdown title="지역" id="collasible-nav-dropdown" value="navdrop">*/}
                {/*        <NavDropdown title="부산" id="collasible-nav-dropdown" value="navdrop" variant="dark">*/}
                {/*            <NavDropdown.Item onClick={this.handleClick}>남구</NavDropdown.Item>*/}
                {/*        </NavDropdown>*/}
                {/*        <NavDropdown title="서울" id="collasible-nav-dropdown" value="navdrop" variant="dark">*/}
                {/*            <NavDropdown.Item onClick={this.handleClick}>남구</NavDropdown.Item>*/}
                {/*        </NavDropdown>*/}
                {/*    </NavDropdown>*/}
                {/*        /!*<Calendar onChange={this.onDateChange} value={this.state.date}/>*!/*/}
                {/*    </Nav>*/}
                {/*</Navbar>*/}

                <Route path="/login" component={LoginComponent} />
                <Route path="/main" component={MainComponent} />
                <Route path="/home" component={HomeComponent} />

            </Router>
        )
    }
}

export default TopMenuComponent
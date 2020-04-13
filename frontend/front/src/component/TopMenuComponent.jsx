import React, {Component} from "react";
import {Button, Navbar, Nav, NavDropdown, Dropdown, DropdownButton,ButtonGroup, Form} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import MainComponent from './MainComponent'
import DashboardComponent from './DashboardComponent'
import LoginComponent from './LoginComponent'
import Logins from './Logins';
import KakaoLogin from "./KakaoLogin";

class TopMenuComponent extends Component {
    constructor(props) {
        super(props)
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
                <Navbar bg="light" sticky="top">
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Brand href="/"><h1>SMASY</h1></Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar bg="dark"
                        variant="dark">
                    <Nav>
                    <NavDropdown title="종목" id="collasible-nav-dropdown" value="navdrop">
                        <NavDropdown.Item onClick={this.handleClick}>축구</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleClick}>야구</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleClick}>족구</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleClick}>농구</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleClick}>당구</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="지역" id="collasible-nav-dropdown" value="navdrop">
                        <DropdownButton
                            as={ButtonGroup} id="dropdown-variants-info" drop="right" variant="secondary" title="부산">
                            <Dropdown.Item eventKey="1" onClick={this.handleClick}>진구</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={this.handleClick}>해운대구</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup} id="dropdown-variants-info" drop="right" variant="secondary" title="부산">
                            <Dropdown.Item eventKey="1" onClick={this.handleClick}>진구</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={this.handleClick}>해운대구</Dropdown.Item>
                        </DropdownButton>
                    </NavDropdown>
                        {/*<Calendar onChange={this.onDateChange} value={this.state.date}/>*/}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="/login" id="mylogin">로그인</Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>

                <Route path="/login2" component={Logins} />
                <Route path="/login" component={KakaoLogin} />
                <Route path="/main" component={MainComponent} />
            </Router>
        )
    }
}

export default TopMenuComponent;
import React, {Component} from "react";
import {Button, Navbar, Nav, NavDropdown, Form} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainComponent from './MainComponent'
import DashboardComponent from './DashboardComponent'
import LoginComponent from './LoginComponent'

class TopMenuComponent extends Component {
     // option = [{name:'Primary', value:'1'},{name:'Secondary', value:'2'}];
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

                            {/*<Form>*/}
                            {/*    <Form.Control as="select" multiple value={options} >*/}
                            {/*        {options.map(options => (*/}
                            {/*            <option key={option.name} value={option.value}>*/}
                            {/*                {option.name}*/}
                            {/*            </option>*/}
                            {/*        ))}*/}
                            {/*    </Form.Control>*/}
                            {/*</Form>*/}
                    <Navbar.Brand href="/main">메인</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="/login" id="mylogin">로그인</Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>

                <Route path="/login" component={LoginComponent} />
                <Route path="/main" component={MainComponent} />
            </Router>
        )
    }
}

export default TopMenuComponent;
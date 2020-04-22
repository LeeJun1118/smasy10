import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../css/Home.css';
import MroomComponent from "../component/MroomComponent";
import EroomComponent from "../component/EroomComponent";

class HomeComponent extends Component {
    handleClick = () => {
        console.log("Click");
    }

    render() {
        return(
            <Router>
                <div className="img">
                    <a href="/makeAroom">
                        <img src="/img/fire.jpg" alt="" onClick={this.handleClick}/>
                    </a>
                    <a href="/enterAroom">
                        <img src="/img/fire.jpg" alt="" onClick={this.handleClick}/>
                    </a>
                </div>

                <Route path="/makeAroom" component={MroomComponent} />
                <Route path="/enterAroom" component={EroomComponent} />
            </Router>
        )
    }
}

export default HomeComponent;
import React from 'react';
import '../css/Home.css';
import {Component} from 'react'
import {NavLink} from "react-router-dom";

class Home extends Component {

    handleClick() {
        console.log("Click");
    }

    render() {
        return (
            <div className="imgt">
                <NavLink to="/room/create">
                    <img src="/img/m-fire.gif" alt="" onClick={this.handleClick} className="img"/>
                    {/*<img src="/img/make.png" className="subimg"/>*/}
                </NavLink>

                <NavLink to="/rooms">
                    <img src="/img/e-fire2.gif" alt="" onClick={this.handleClick} className="img"/>
                    {/*<img src="/img/enter.png" alt="" onClick={handleClick} className="subimg"/>*/}
                </NavLink>
            </div>
        );
    }
};


export default Home;
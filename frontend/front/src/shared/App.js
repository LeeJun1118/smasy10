import React, {Component, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css';
import {Route} from 'react-router-dom';
import {Menu, Home, About, Login, EroomComponent, KakaoLogin, Logink, MroomComponent, EachRoomComponent} from "pages";

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/room/create" component={MroomComponent}/>
                <Route exact path="/rooms" component={EroomComponent}/>
                <Route exact path="/rooms/enter/:id" component={EachRoomComponent}/>
                <Route exact path="/kakaologin" component={Logink}/>
            </div>
        );
    }
}

export default App;
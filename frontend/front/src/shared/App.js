import React, {Component} from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Home from "../pages/Home";
import MroomComponent from "../component/MroomComponent";
import Eroom from "../pages/Eroom";
import Menu from "../pages/Menu";
import EachRoomComponent from "../component/EachRoomComponent";
import EroomComponent from "../component/EroomComponent";
import MenuComponent from "../component/MenuComponent";
import Reserve from "../pages/Reserve";
import Review from "../pages/Review";
import Footer from "../pages/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        }

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if (this.state.loading) {
            return <LoadingIndicator/>
        }

        return (
            <div className="app">
                {/*<div className="app-top-box">*/}
                    <MenuComponent authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                {/*</div>*/}
                {/*<div className="app-body">*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <PrivateRoute path="/room/create" authenticated={this.state.authenticated}
                                      currentUser={this.state.currentUser}
                                      component={MroomComponent}/>

                        <Route exact path="/rooms" component={EroomComponent}/>
                        {/*<Route exact path="/rooms" authenticated={this.state.authenticated}*/}
                        {/*       currentUser={this.state.currentUser}*/}
                        {/*       component={Eroom}/>*/}
                        <PrivateRoute path="/rooms/enter/:id" authenticated={this.state.authenticated}
                                      currentUser={this.state.currentUser}
                                      component={EachRoomComponent}/>

                        <PrivateRoute exact path="/profile" authenticated={this.state.authenticated}
                                      currentUser={this.state.currentUser}
                                      component={Profile}/>
                        <Route path="/profile/reserve" component={Reserve}/>
                        <Route path="/profile/review" component={Review}/>

                        <Route path="/login"
                               render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                        <Route component={NotFound}/>
                    </Switch>
                <Footer/>
                {/*</div>*/}
                <Alert stack={{limit: 3}}
                       timeout={3000}
                       position='top-right' effect='slide' offset={65}/>
            </div>
        );
    }
}

export default App;



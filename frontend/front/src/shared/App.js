import React, {Component, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css';
import {Route, Switch} from 'react-router-dom';
import {
    MenuComponent,
    Home,
    EroomComponent,
    MroomComponent,
    EachRoomComponent,
    Login,
    Signup,
    Profile,
    OAuth2RedirectHandler
} from "pages";
// import Login from '../user/login/Login';
// import Signup from '../user/signup/Signup';
// import Profile from '../user/profile/Profile';
// import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import AppHeader from '../common/AppHeader';
import NotFound from "../common/NotFound";

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
        /*        if(this.state.loading) {
                    return <LoadingIndicator />
                }*/
        return (
            <div>
                {/*<div className="app-top-box">*/}
                {/*    <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>*/}
                {/*</div>*/}
                <div>
                    <MenuComponent authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                    <Route exact path="/" component={Home}/>
                    {/*<Route exact path="/about" component={About}/>*/}
                    {/*<Route exact path="/login" component={Login}/>*/}
                    <Route exact path="/room/create" component={MroomComponent}/>
                    <Route exact path="/rooms" component={EroomComponent}/>
                    <Route exact path="/room/enter/:id" component={EachRoomComponent}/>
                    {/* <Route exact path="/kakaologin" component={Logink}/>*/}
                    <PrivateRoute path="/profile" authenticated={this.state.authenticated}
                                  currentUser={this.state.currentUser}
                                  component={Profile}/>
                    <Route path="/login"
                           render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                    <Route path="/signup"
                           render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                    <Route component={NotFound}/>
                </div>
                <Alert stack={{limit: 3}}
                       timeout={3000}
                       position='top-right' effect='slide' offset={65}/>
            </div>
        );
    }
}

export default App;
import React from "react";
import {Route} from 'react-router-dom';
import EachRoomComponent from "../component/EachRoomComponent";
import EroomComponent from "../component/EroomComponent";
import PrivateRoute from "../common/PrivateRoute";

const Eroom = ({ match }) => {
    return(
        <>
            <Route exact path={`${match.path}`} component={EroomComponent}/>
            <PrivateRoute path="/rooms/enter/:id" authenticated={this.state.authenticated}
                          currentUser={this.state.currentUser}
                          component={EachRoomComponent}/>

            {/*<Route path={`${match.path}/enter/:id`} component={EachRoomComponent} />*/}
        </>
    )
}

export default Eroom
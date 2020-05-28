import React from "react";
import {Route} from 'react-router-dom';
import EachRoomComponent from "../component/EachRoomComponent";
import EroomComponent from "../component/EroomComponent";

const Eroom = ({ match }) => {
    return(
        <>
            <Route exact path={`${match.path}`} component={EroomComponent} />
            <Route path={`${match.path}/enter/:id`} component={EachRoomComponent} />
        </>
    )
}

export default Eroom
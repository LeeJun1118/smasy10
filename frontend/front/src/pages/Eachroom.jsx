import React from "react";
import { Route } from 'react-router-dom';
import EachRoomComponent from "../component/EachRoomComponent";

const Eachroom = ({ match }) => {
    const room = rooms.find((room) => room.id === match.params.id)
    return(
        <>


        </>
    )
}

export default Eachroom
import React ,{Component} from "react";
import {Route} from 'react-router-dom';
import EachRoomComponent from "../component/EachRoomComponent";
import EroomComponent from "../component/EroomComponent";
import PrivateRoute from "../common/PrivateRoute";
import MyMapPopUp from "../component/MyMapPopUp";
import MroomComponent from "../component/MroomComponent";

class Between extends Component{
    constructor(props) {
        super(props);
        this.state = {
            place: []
        };
    }

    getData = (data) =>{
        this.setState({place: data});
    }

    render(){
        return(
            <>
                <MyMapPopUp formA={this.getData}/>
                <MroomComponent toB={this.state.place}/>
            </>
        )
    }
}

export default Between
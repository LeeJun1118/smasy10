import React,{Component} from "react";
import {Button} from "react-bootstrap";

class LoginComponent extends Component {
    render() {
        return(
            <div>
                Login 페이지
            </div>
        )
    }

    handleClick = () => {
        console.log("Click");
    }
}



export default LoginComponent
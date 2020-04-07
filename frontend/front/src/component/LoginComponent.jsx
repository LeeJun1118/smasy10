import React,{Component} from "react";
import {Button} from "react-bootstrap";

class LoginComponent extends Component {
    render() {
        return(
            <div>
                Login 페이지
                <Button variant="outline-info" onClick={this.handleClick}>로그인</Button>
            </div>
        )
    }

    handleClick = () => {
        console.log("Click");
    }
}



export default LoginComponent
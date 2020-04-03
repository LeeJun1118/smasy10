import React,{Component} from "react";
import {Button} from "react-bootstrap";

class LoginComponent extends Component {
    render() {
        return(
            <div>
                Login 페이지
                <Button variant="primary" onClick={this.handleClick}>로그인</Button>
            </div>
        )
    }

    handleClick = () => {
        console.log("Click");
        // this.mylogin.setValue("내 정보");
    }
}



export default LoginComponent
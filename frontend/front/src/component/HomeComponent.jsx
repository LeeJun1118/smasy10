import React, {Component} from "react";
import {Button} from "react-bootstrap";

class HomeComponent extends Component {
    render() {
        return(
            <div>
               Home 페이지
                <Button variant="outline-info" onClick={this.handleClick} href="/login">방만들기</Button>
                <Button variant="outline-info" onClick={this.handleClick}>방들어가기</Button>
            </div>
        )
    }
}

export default HomeComponent
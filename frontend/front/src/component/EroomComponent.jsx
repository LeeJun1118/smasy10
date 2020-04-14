import React,{Component} from "react";
import {Button} from "react-bootstrap";

class EroomComponent extends Component {
    render() {
        return(
            <div>
                방 들어가는 페이지
                <div>
                    <Button variant="outline-info" >버튼</Button>
                    <Button variant="outline-info">테스트</Button>
                </div>
            </div>
        )
    }

    handleClick = () => {
        console.log("Click");
    }
}



export default EroomComponent
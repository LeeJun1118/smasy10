import React,{Component} from "react";

class MroomComponent extends Component {
    render() {
        return(
            <div>
                방 만드는 페이지
            </div>
        )
    }

    handleClick = () => {
        console.log("Click");
    }
}



export default MroomComponent
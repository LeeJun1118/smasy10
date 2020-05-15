import React,{Component} from "react";


class MroomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            search: '',
            currentPage: 1,
            roomsPerPage: 5,
            sortToggle: true
        };
    }

    render() {
        return(
            <div>
                방 만드는 페이지
            </div>
        )
    }
}

export default MroomComponent;
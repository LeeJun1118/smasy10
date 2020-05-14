import React,{Component} from "react";
import Eroom from "../pages/Eroom";
import axios from "axios";

const ShowRoom = (props) => (
    <tr>
        <td>{props.eroom.roomNumber}</td>
        <td>{props.eroom.roomSport}</td>
        <td>{props.eroom.roomArea}</td>
        <td>{props.eroom.roomFacility}</td>
        <td>{props.eroom.roomDate}</td>
        <td>1</td>
    </tr>
);

class EroomComponent extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            roomNumber: "",
            roomSport: "",
            roomArea: "",
            roomFacility: "",
            roomDate: "",
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/api/room/list")
            .then(res => {
                this.setState({
                    allAssignments: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getRows() {
        if (!this.state.allAssignments && !this.state.allAssignments.length) return null;
        return this.state.allAssignments.map((currentAssignment, id) => {
            return <ShowRoom book={currentAssignment} key={id} />
        });
    }
*/
    render() {
        return(
            <div>
                방 입장 페이지
                <Eroom/>
            </div>
        )
    }
}

export default EroomComponent
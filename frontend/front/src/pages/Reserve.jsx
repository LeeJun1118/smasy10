import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import {enterRoom} from "../util/APIUtils";
import Alert from "react-s-alert";
// import '../css/Reserve.css';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
    }
    componentDidMount() {
        // this.findAllRooms(this.state.currentPage);
        enterRoom(this.props.match.params.id)
            .then(response => {
                Alert.success("You're successfully checked the reservations!");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }
    render() {
        const {reservations} = this.state;
        return (
            <div className="Reserve">
                <Table striped bordered hover id="table">
                    <caption className="caption">현재 방</caption>
                    <thead>
                    <tr>
                        <th>방 번호</th>
                        <th>방 제목</th>
                        <th>지역</th>
                        <th>운동 종목</th>
                        <th>경기 날짜</th>
                        <th>입장 하기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservations.length === 0 ?
                            (<tr align="center">
                                <td colSpan="7">방이 없습니다.</td>
                            </tr>)
                            :
                            reservations.map((resv) => (
                                <tr key={resv.id}>
                                    <td>{resv.id}</td>
                                    <td>{resv.title}</td>
                                    <td>{resv.area}</td>
                                    <td>{resv.sports}</td>
                                    <td>{resv.date}</td>
                                    <td >
                                        {/*<Link to={"/rooms/" + room.id} className="btn btn-sm btn-outline-primary">입장</Link>*/}
                                        <Link to={this.props.match.url+ "/enter/" + resv.id + "/" + this.state.isCap}>입장</Link>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
};


export default Reserve;
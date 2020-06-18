import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import {myRservation} from "../util/APIUtils";
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
        myRservation()
            .then(response => {
                Alert.success("You're successfully checked the reservations!");
                const data = response;
                this.setState({
                    reservations: data
                })
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }
    writeReview =()=>{

    }

    const [modalShow, setModalShow] = useState(false);

    render() {
        const {reservations} = this.state;
        return (
            <div className="Reserve">
                <Table striped bordered hover id="table">
                    <caption className="caption">예약 내역</caption>
                    <thead>
                    <tr>
                        <th>방 번호</th>
                        <th>방 제목</th>
                        <th>장소</th>
                        <th>운동 종목</th>
                        <th>경기 날짜</th>
                        <th>예약 보기</th>
                        <th>리뷰 쓰기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservations.length === 0 ?
                            (<tr align="center">
                                <td colSpan="7">예약 내역이 없습니다.</td>
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
                                        <Link to={this.props.match.url+ "/enter/" + resv.roomId }>확인</Link>
                                    </td>
                                    <td >
                                        <Link to={this.props.match.url} onClick={this.writeReview}>리뷰</Link>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        );
    }
};


export default Reserve;
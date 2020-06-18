import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Table} from "react-bootstrap";
// import '../css/Review.css';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }
    render() {
        const {reviews} = this.state;
        return (
            <div className="Review">
                <Button variant="primary" type="submit" onClick={this.handleSearchRoom}>전체 리뷰</Button>
                <Button variant="primary" type="submit" onClick={this.handleSearchRoom}>나의 리뷰</Button>
                <Table striped bordered hover id="table">
                    <caption className="caption">리뷰 내역</caption>
                    <thead>
                    <tr>
                        <th>방 번호</th>
                        <th>방 제목</th>
                        <th>장소</th>
                        <th>운동 종목</th>
                        <th>경기 날짜</th>
                        <th>예약 보기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reviews.length === 0 ?
                            (<tr align="center">
                                <td colSpan="7">리뷰가 없습니다.</td>
                            </tr>)
                            :
                            reviews.map((rev) => (
                                <tr key={rev.id}>
                                    <td>{rev.id}</td>
                                    <td>{rev.title}</td>
                                    <td>{rev.area}</td>
                                    <td>{rev.sports}</td>
                                    <td>{rev.date}</td>
                                    <td >
                                        {/*<Link to={"/rooms/" + room.id} className="btn btn-sm btn-outline-primary">입장</Link>*/}
                                        <Link to={this.props.match.url+ "/enter/" + rev.roomId + "/" + this.state.isCap}>확인</Link>
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


export default Review;
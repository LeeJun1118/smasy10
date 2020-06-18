import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Table} from "react-bootstrap";
import {ReviewsList} from "../util/APIUtils";
import Alert from "react-s-alert";
// import '../css/Review.css';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }
    allReviews=()=>{
        ReviewsList()
            .then(response => {
                Alert.success("You're successfully checked reviews!");
                const data = response;
            // console.log("data = " + JSON.stringify(data));
                this.setState({ reviews: data });
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
                this.setState({ reviews: [] });
            });
    }
    myReviews=()=>{

    }
    onDelete = () =>{
        // deleteReview(id)
        //     .then(response => {
        //         Alert.success("You're successfully checked reviews!");
        //         const data = response;
        //         // console.log("data = " + JSON.stringify(data));
        //     }).catch(error => {
        //         Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        //     });
    }
    render() {
        const {reviews} = this.state;
        return (
            <div className="Review">
                <Button variant="primary" type="submit" onClick={this.allReviews}>전체 리뷰</Button>
                <Button variant="primary" type="submit" onClick={this.myReviews}>나의 리뷰</Button>

                <Table striped bordered hover id="table">
                    <caption className="caption">리뷰 내역</caption>
                    <thead>
                    <tr>
                        <th>장소</th>
                        <th>운동 종목</th>
                        <th>경기 날짜</th>
                        <th>내용</th>
                        <th>비고</th>
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
                                    <td>{rev.area}</td>
                                    <td>{rev.sports}</td>
                                    <td>{rev.date}</td>
                                    <td>{rev.content}</td>
                                    <td >
                                        {/*<Link to={"/rooms/" + room.id} className="btn btn-sm btn-outline-primary">입장</Link>*/}
                                        <Link onClick={this.onDelete}>삭제</Link>
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
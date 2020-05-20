import React, {Component} from "react";
import axios from "axios";
import '../css/EachRoom.css';
import {Button, Card, Table} from 'react-bootstrap'
import MapPopUp from "./MapPopUp";

class EachRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            users : []
        };
    }

    sortData = () => {
        // this.setState(state => ({
        //     sortToggle: !state.sortToggle
        // }));
        // this.findAllRooms(this.state.currentPage);
    }

    componentDidMount() {
        // this.findAllRooms(this.state.currentPage);
    }

    findById(id) {
        fetch("http://localhost:8080/api/rooms/enter/")
            .then(response => response.json()
            )
            .then((data) => {
                this.setState({rooms: data});
            })
    }

    onExitRoom = () => {
        window.location.assign('/rooms');
        // history.push('/room');
        // return this.props.history.push("/");
    }

    render() {
        const {rooms, currentPage, totalPages, search} = this.state;
        return (
            <div className="EachRoom">
                <Table striped bordered hover className="table">
                    <caption className="caption">현재 방</caption>
                    <tr><th>번호</th><th>제목</th><th>지역</th><th>운동 종목</th><th>경기 날짜</th></tr>
                    <tr><td>1</td>
                        <td>테스트</td>
                        <td>테스트</td>
                        <td>테스트</td>
                        <td>테스트</td></tr>
                </Table>

                <Table className="table">
                    <td>
                        <Table>
                            <caption className="caption">팀 1</caption>
                            <thead><tr><th>이름</th><th>나이대</th></tr></thead>
                            <tbody>
                            <tr>
                                <td>나축구</td><td>20대</td>
                            </tr>
                            <tr>
                                <td>나축구</td><td>20대</td>
                            </tr>
                            </tbody>
                        </Table>
                    </td>
                    <td>
                        <h1 id="vs">VS</h1>
                    </td>
                    <td>
                        <Table>
                            <caption className="caption">팀 2</caption>
                            <thead><tr><th>이름</th><th>나이대</th></tr></thead>
                            <tbody>
                            <tr>
                                <td>너야구</td><td>20대</td>
                            </tr>
                            </tbody>
                        </Table>
                    </td>
                </Table>

                <Card className="card">
                        <MapPopUp/>
                    </Card>


                        <Table id="fTable">
                            <tbody>
                            <tr><td>시설명</td><td>운동장</td></tr>
                            <tr><td>위치</td><td>부산 남구 뭐시기</td></tr>
                            <tr><td>가격</td><td>시간당 2만원</td></tr>
                            <tr><td>정보</td><td>등등</td></tr>
                            </tbody>
                        </Table>


                <Button variant="dark" type="submit" className="btn">
                    예약하기</Button>
                <Button variant="dark" type="submit" className="btn" onClick={this.onExitRoom}>
                    나가기</Button>
            </div>
        )
    }
}

export default EachRoomComponent
import React, {Component} from "react";
import axios from "axios";
import '../css/EachRoom.css';
import {Button, Card, Table} from 'react-bootstrap'
import PopUp from "./PopUp";

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
                <Table striped bordered hover id="table">
                    <caption className="caption">현재 방</caption>
                    <tr><th>번호</th><th>제목</th><th>지역</th><th>운동 종목</th><th>경기 날짜</th></tr>
                    <tr><td>1</td>
                        <td>테스트</td>
                        <td>테스트</td>
                        <td>테스트</td>
                        <td>테스트</td></tr>
                </Table>

                <Table className="MemberTable">
                    <td>
                        <Table>
                            <caption className="caption">팀 1</caption>
                            <thead><tr><th>이름</th><th>나이대</th></tr></thead>
                            <tbody>
                            <tr>
                                <td>나축구</td>
                                <td>20대</td>
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
                                <td>너야구</td>
                                <td>20대</td>
                            </tr>
                            </tbody>
                        </Table>
                    </td>
                </Table>

                <PopUp/>

                <Button variant="dark" type="submit" onClick={this.onExitRoom}>
                    나가기
                </Button>
            </div>
        )
    }
}

export default EachRoomComponent
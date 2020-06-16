import React, {Component} from "react";
import axios from "axios";
import '../css/EachRoom.css';
import {Button, Card, Form, FormControl, Table} from 'react-bootstrap'
import MapPopUp from "./MapPopUp";
import Alert from "react-s-alert";
import {
    currentRoom,
    getUserCounts,
    getUserInfo,
    exitRoom,
    registerComments,
    CommentsList,
    enterRoom
} from "../util/APIUtils";
import {Link} from "react-router-dom";
import Check from "./Check";

class EachRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: [],
            users : [],
            usersCount : 0,
            comments: [],
            content:'',
            clicked: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    sortData = () => {
        // this.setState(state => ({
        //     sortToggle: !state.sortToggle
        // }));
        // this.findAllRooms(this.state.currentPage);
    }

    componentDidMount() {
        // this.findAllRooms(this.state.currentPage);
        enterRoom(this.props.match.params.id)
            .then(response => {
                Alert.success("You're successfully entered the room!");
            }).catch(error => {
            });

        currentRoom(this.props.match.params.id)
            .then(response => {
                const data = response;
                // console.log(data);
                this.setState({ room: data });
            }).catch(error => {
                this.setState({ room: [] });
            });

        getUserCounts(this.state.room.id)
            .then(response => {
                const data = response;
                this.setState({usersCount: data});
            }).catch(error => {
                this.setState({usersCount: 0});
            });

        getUserInfo(this.state.room.id)
            .then(response => {
                const data = response;
                this.setState({users: data});
            }).catch(error => {
                this.setState({users: []});
            });

        CommentsList(this.state.room.id)
            .then(response => {
                const data = response;
                this.setState({comments: data});
            }).catch(error => {
                this.setState({comments: []});
            });
    }


    findById(id) {
        fetch("http://localhost:8080/api/rooms/enter/:id")
            .then(response => response.json()
            )
            .then((data) => {
                this.setState({room: data});
            })
    }

    onExitRoom = () => {
        exitRoom(this.state.room.id)
            .then(response => {
                Alert.success("You're successfully exited the room!");
                window.history.back();
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    onReserve = () =>{

        if(this.state.clicked){
            console.log("예약 완료");
        }else{
            console.log("예약 취소");
       }
        this.setState({clicked: !this.state.clicked});
    }

    handleInputChange(event) {
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        console.log("content =" + inputValue);
        this.setState({
            content : inputValue
        });
    }
    handleRegister(){
        const registerCommentsRequest = Object.assign({}, this.state);

        console.log("comments = "+ registerCommentsRequest);

        registerComments(registerCommentsRequest, this.state.room.id)
            .then(response => {
                Alert.success("You're successfully registered a comment!");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        const {room, usersCount, users} = this.state;
        return (
            <div className="EachRoom">
                <Table striped bordered hover className="table">
                    <caption className="caption">현재 방</caption>
                    <tr><th>번호</th><th>제목</th><th>지역</th><th>운동 종목</th><th>경기 날짜</th><th>현재 인원</th></tr>
                    <tr>
                        <td>{room.id}</td>
                        <td>{room.title}</td>
                        <td>{room.area}</td>
                        <td>{room.sports}</td>
                        <td>{room.date}</td>
                        <td>{usersCount}</td>
                    </tr>
                </Table>

                <Table className="table">
                    <td>
                        <Table>
                            <caption className="caption">팀 1</caption>
                            <thead><tr><th>id</th><th>나이대</th></tr></thead>
                            <tbody>
                            {
                                users.length === 0 ?
                                    (<tr align="center">
                                        <td colSpan="7" onClick={this.onRoomEnter}>없습니다.</td>
                                    </tr>)
                                    :
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </td>
                    <td>
                        <h1 id="vs">VS</h1>
                    </td>
                    <td>
                        <Table>
                            <caption className="caption">팀 2</caption>
                            <thead><tr><th>id</th><th>이름</th></tr></thead>
                            <tbody>
                            {
                                users.length === 0 ?
                                    (<tr align="center">
                                        <td colSpan="7" onClick={this.onRoomEnter}>없습니다.</td>
                                    </tr>)
                                    :
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                        </tr>
                                    ))
                            }
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

                <Check resource="models" permission="write">
                    <Button variant="primary" className="btn" onClick={this.onReserve}>{
                            this.state.clicked ? "예약하기" : "예약 취소"
                        }</Button>
                    <Button variant="primary" className="btn">삭제하기</Button>
                </Check>

                <Button variant="primary" className="btn" onClick={this.onExitRoom}>나가기</Button>

                <Form inline className="form" onKeyPress={this.onKeyPress} onSubmit={this.onSubmit}>
                    <Form.Label>댓글&nbsp;</Form.Label>
                    <FormControl type="text" placeholder="Comments" className="mr-sm-2"
                                 onChange={this.handleInputChange}
                                 name="roomsSearch"/>
                    <Button variant="outline-primary" onClick={this.handleRegister}>등록</Button>
                </Form>
                <Table>
                    <thead><tr><th>이름</th><th>내용</th></tr></thead>
                    <tbody>
                    {/*{*/}
                    {/*    replies.length === 0 ?*/}
                    {/*        (<tr align="center">*/}
                    {/*            <td colSpan="7">댓글이 없습니다.</td>*/}
                    {/*        </tr>)*/}
                    {/*        :*/}
                    {/*        replies.map((reply) => (*/}
                    {/*            <tr key={reply.id}>*/}
                    {/*                <td>{reply.id}</td>*/}
                    {/*                <td>{reply.contents}</td>*/}
                    {/*            </tr>*/}
                    {/*        ))*/}
                    {/*}*/}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default EachRoomComponent
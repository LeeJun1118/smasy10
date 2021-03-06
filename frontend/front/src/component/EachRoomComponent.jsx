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
    enterRoom,
    editComments,
    deleteComments, reservationRoom, reservationCancel, deleteRoom
} from "../util/APIUtils";
import {Link} from "react-router-dom";
import ne from "moment/locale/ne";

class EachRoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: [],
            users : [],
            usersCount : 0,
            comments: [],
            content:'',
            clicked: true,
            place: []
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleRegister = this.handleRegister.bind(this);
    }

    sortData = () => {
        // this.setState(state => ({
        //     sortToggle: !state.sortToggle
        // }));
        // this.findAllRooms(this.state.currentPage);
    }

    componentDidMount() {
        // console.log("현재 : " +JSON.stringify(this.props.currentUser));

        // this.findAllRooms(this.state.currentPage);
        enterRoom(this.props.match.params.id)
            .then(response => {
                Alert.success("You're successfully entered the room!");
            }).catch(error => {
                //이상하게 메시지가 성공오류ㅠ 둘 다 뜸
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });

        currentRoom(this.props.match.params.id)
            .then(response => {
                const data = response;
                // console.log(data);
                this.setState({ room: data });
            }).catch(error => {
                this.setState({ room: [] });
            });

        getUserCounts(this.props.match.params.id)
            .then(response => {
                const data = response;
                this.setState({usersCount: data});
            }).catch(error => {
                this.setState({usersCount: 0});
            });

        getUserInfo(this.props.match.params.id)
            .then(response => {
                const data = response;
                this.setState({users: data});
            }).catch(error => {
                this.setState({users: []});
            });
        this.showCommentsList();
    }


    findById(id) {
        fetch("http://localhost:8080/api/rooms/enter/:id")
            .then(response => response.json()
            )
            .then((data) => {
                console.log(JSON.stringify(data));
                this.setState({room: data});
            })
    }

    onExitRoom = () => {
        exitRoom(this.state.room.id)
            .then(response => {
                Alert.success("You're successfully exited the room!");
                this.props.history.replace("/rooms");
                // window.history.back();
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    onReserve = () =>{ //예약하기
            const reservationRoomRequest = Object.assign({}, this.state.place);
            reservationRoom(reservationRoomRequest, this.state.room.id)
                .then(response => {
                    Alert.success("You're successfully reserved!");
                    this.setState({clicked: false})
                }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }
    onReserveCancel = () =>{ //예약 취소
            reservationCancel(this.state.room.id)
                .then(response => {
                    Alert.success("You're successfully canceled the reservation!");
                    this.setState({clicked: true})
                }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    onDelete = () =>{
        deleteRoom(this.state.room.id)
            .then(response => {
                Alert.success("You're successfully deleted the room!");
                this.props.history.replace("/rooms");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    handleInputChange = (event) =>{
        // console.log(this.state.room.head);
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        // console.log("content =" + inputValue);
        this.setState({
            content : inputValue
        });
    }

    showCommentsList = () =>{
        CommentsList(this.props.match.params.id)
            .then(response => {
                const data = response;
                this.setState({comments: data});
            }).catch(error => {
                this.setState({comments: []});
            });
    }

    handleRegister = () =>{ //댓글 쓰기
        const registerCommentsRequest = Object.assign({}, this.state);
        console.log(registerCommentsRequest);
        registerComments(registerCommentsRequest, this.state.room.id)
            .then(response => {
                Alert.success("You're successfully registered a comment!");
                this.showCommentsList();
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    handleEdit = (e) => { //댓글 수정
        const target = e.target;
        const id = target.name;
        // console.log(id);
        const editCommentsRequest = Object.assign({}, this.state);
        editComments(editCommentsRequest, id)
            .then(response => {
                Alert.success("You're successfully edited a comment!");
                this.showCommentsList();
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    handleDelete = (e) =>{ //댓글 삭제
        const target = e.target;
        const id = target.name;
        // console.log(id);
        deleteComments(id)
            .then(response => {
                Alert.success("You're successfully deleted a comment!");
                this.showCommentsList();
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    onKeyPress = (e) =>{
        if(e.key == 'Enter'){
            this.handleRegister();
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
    }

    Acallback =(dataFromB)=>{
        this.setState({
            place: dataFromB
        })
    }

    render() {
        const {room, usersCount, users, comments, place} = this.state;
        const res1 = users.filter(users => users.id%2);
        const res2 = users.filter(users => !(users.id%2));
        return (
            <div className="EachRoom">
                <Table striped bordered hover className="table">
                    <caption className="caption">현재 방</caption>
                    <tr><th>번호</th><th>제목</th><th>장소</th><th>운동 종목</th><th>경기 날짜</th><th>현재 인원</th></tr>
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
                            <thead><tr><th>id</th><th>이름</th></tr></thead>
                            <tbody>
                            {

                                res1.length === 0 ?
                                    (<tr align="center">
                                        <td colSpan="7" onClick={this.onRoomEnter}>없습니다.</td>
                                    </tr>
                                    ) :
                                    res1.map((user) => (
                                    <tr key={user.id}>
                                    <td>{user.user.id}</td>
                                    <td>{user.user.name}</td>
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
                                res2.length === 0 ?
                                    (<tr align="center">
                                        <td colSpan="7" onClick={this.onRoomEnter}>없습니다.</td>
                                    </tr>)
                                    :
                                    res2.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.user.id}</td>
                                            <td>{user.user.name}</td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </td>
                </Table>

                <Card className="card">
                    <MapPopUp placeName={room.area} callbackFromA={this.Acallback}/>
                </Card>

                <Table id="fTable">
                    <tbody>
                    <tr><td>장소명</td><td>{place.name}</td></tr>
                    <tr><td>위치</td><td>{place.address}</td></tr>
                    <tr><td>번호</td><td>{place.phoneNo}</td></tr>
                    </tbody>
                </Table>
                {
                    (this.props.currentUser.id === room.head)? (
                        ((!room.state && this.state.clicked) ? (
                                <div>
                                <Button variant="primary" className="btn" onClick={this.onReserve}>예약하기</Button>
                                <Button variant="primary" className="btn" onClick={this.onDelete}>삭제하기</Button>
                                </div>
                            ): (
                                <div>
                                    <Button variant="primary" className="btn" onClick={this.onReserveCancel}>예약취소</Button>
                                </div>
                            ))
                    ):(
                        (!room.state)?(
                            <div>
                                <Button variant="primary" className="btn" onClick={this.onExitRoom}>나가기</Button>
                            </div>
                        ):(
                            <></>
                        )
                    )
                }
                {/*<Button variant="primary" className="btn" onClick={this.onReserve}>예약하기</Button>*/}
                {/*<Button variant="primary" className="btn" onClick={this.onReserveCancel}>예약취소</Button>*/}
                {/*<Button variant="primary" className="btn" onClick={this.onDelete}>삭제하기</Button>*/}
                {/*<Button variant="primary" className="btn" onClick={this.onExitRoom}>나가기</Button>*/}

                <Form inline className="form" onKeyPress={this.onKeyPress} onSubmit={this.onSubmit}>
                    <Form.Group>
                    <Form.Label>댓글&nbsp;</Form.Label>
                    <FormControl type="text" placeholder="Comments"
                                 onChange={this.handleInputChange}
                                 name="roomsSearch"/>
                        </Form.Group>
                    <Button variant="outline-primary" onClick={this.handleRegister}>등록</Button>
                </Form>
                {/*<br/>*/}
                <Table>
                    <thead><tr><th>이름</th><th>내용</th><th>비고</th></tr></thead>
                    <tbody>
                    {
                        comments.length === 0 ?
                            (<tr align="center">
                                <td colSpan="7">댓글이 없습니다.</td>
                            </tr>)
                            :
                            comments.map((comment) => (
                                <tr key={comment.id}>
                                    <td>{comment.userName}</td>
                                    <td>{comment.content}</td>
                                    <td>{
                                        (this.props.currentUser.id === comment.userId)? (
                                            <>
                                                <Link name={comment.id} onClick={this.handleEdit}>수정</Link>&nbsp;&nbsp;
                                                <Link name={comment.id} onClick={this.handleDelete}>삭제</Link>
                                            </>
                                        ):(<></>)
                                    }</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default EachRoomComponent
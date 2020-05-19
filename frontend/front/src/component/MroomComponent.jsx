import React, {Component} from "react";
import Mroom from "../pages/Mroom";
import {Button, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Mroom.css';
import ApiService from '../server/ApiService'
import moment from 'moment';
import axios from 'axios';
import {Route} from "react-router-dom";
import Home from "../pages/Home";

class MroomComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.createRoom = this.createRoom.bind(this);
    }

    initialState = {
        id: '', title: '', sports: '', area: '', date: '',
    };

    createRoom = event => {
        event.preventDefault();

        const room = {
            title: this.state.title,
            sports: this.state.sports,
            area: this.state.area,
            date: this.state.date
        };

        axios.post("http://localhost:8080/api/room/create", room)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true, "method": "post"});
                    setTimeout(() => this.setState({"show": false}), 3000);
                } else {
                    this.setState({"show": false});
                }
            });
        this.setState(this.initialState);
    };

    redirectHome = () => {
        return this.props.history.push("/");
    }


    onSelectChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name + ' , ' + e.target.value);
    }

    //캘린더 관련 함수
    // state = () => {
    //     date:  new Date()
    // }
    onClickDate = (date) => {
        console.log(moment(date).format("YYYY-MM-DD"));
        this.setState({
            date: moment(date).format("YYYY-MM-DD")
        })
    }

    render() {
        return (
            <div className="Mroom">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1" id="title"
                                value={this.state.title}>
                        <Form.Label>방 제목</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={this.onSelectChange}
                                      name="title"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="sports" value={this.state.sports}>
                        <Form.Label>운동 종목</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="sports">
                            <option selected disabled>Please select</option>
                            <option>1</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="area" value={this.state.area}>
                        <Form.Label>지역</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="area">
                            <option selected disabled>Please select</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                            <option>e</option>
                        </Form.Control>
                    </Form.Group>

                    {/*<Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>시설</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="roomFacility">
                            <option selected disabled>Please select</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </Form.Control>
                    </Form.Group>*/}

                    <Form.Group id="calendar" value={this.state.date} onClick={this.onClickDate}>
                        <Form.Label>날짜</Form.Label>
                        <Calendar name="date"/>
                    </Form.Group>

                    {/* 각 시설 위치 지도 보여주면 좋을 듯*/}

                    <Button variant="dark" type="submit" onClick={this.createRoom}>
                        개설하기
                    </Button>
                </Form>
            </div>
        )
    }
}

export default MroomComponent;
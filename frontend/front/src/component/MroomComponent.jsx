import React,{Component} from "react";
import Mroom from "../pages/Mroom";
import {Button, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Mroom.css';
import ApiService from '../server/ApiService'
import moment from 'moment';

class MroomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTitle: '',
            roomSports: '',
            roomArea: '',
            roomFacility: '',
            roomDate: new Date()
        };
    }

    onSelectChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log( e.target.name + ' , ' + e.target.value);
    }

    saveRoom = (e) =>{
        e.preventDefault();

        let room = {
            roomTitle: this.state.roomTitle,
            roomSports: this.state.roomSports,
            roomArea: this.state.roomArea,
            roomFacility: this.state.roomFacility,
            roomDate: this.state.roomDate
        }

        ApiService.addRoom(room)
        .then(res =>{
                this.props.history.push('/rooms');
        })
        .catch(err =>{
            console.log('saveRoom() 에러',err);
        })
    }

    //캘린더 관련 함수
    // state = () => {
    //     date:  new Date()
    // }
    onClickDate = (date) => {
        console.log( moment(date).format("YYYY-MM-DD"));
        this.setState({
            roomDate: moment(date).format("YYYY-MM-DD")
        })
    }
    ////

    render() {
        return(
            <div className="Mroom">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1" id="title"
                                 value={this.state.roomTitle} >
                        <Form.Label>방 제목</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={this.onSelectChange} name="roomTitle"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="sports" value={this.state.roomSports}>
                        <Form.Label>운동 종목</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="roomSports">
                            <option selected disabled>Please select</option>
                            <option>1</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="area" value={this.state.roomArea}>
                        <Form.Label>지역</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="roomArea">
                            <option selected disabled>Please select</option>
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                            <option>e</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="facility" value={this.state.roomFacility}>
                        <Form.Label>시설</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectChange} name="roomFacility">
                            <option selected disabled>Please select</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group id="calendar" value={this.state.roomDate} onClick={this.onClickDate}>
                        <Form.Label>날짜</Form.Label>
                        <Calendar name="roomDate"/>
                    </Form.Group>

                    {/* 각 시설 위치 지도 보여주면 좋을 듯*/}

                    <Button variant="dark" type="submit" onClick={this.saveRoom}>개설하기</Button>
                </Form>
            </div>
        )
    }
}

export default MroomComponent;
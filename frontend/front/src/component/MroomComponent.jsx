import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Mroom.css';
import moment from 'moment';
import axios from 'axios'
import {createRoom} from "../util/APIUtils"
import Alert from 'react-s-alert';

class MroomComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            sports: '',
            area: '',
            date: ''
        };
        //this.createRoom = this.createRoom.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const createRoomRequest = Object.assign({}, this.state);

        createRoom(createRoomRequest)
            .then(response => {
                Alert.success("You're successfully create room!");
                this.props.history.push("/");
                //this.props.history.push("/rooms/enter/" + this.state.id);
            }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }

    onChangeDate = (date) => {
        console.log(moment(date).format("YYYY-MM-DD"));
        this.setState({
            date: moment(date).format("YYYY-MM-DD")
        })
    }

    render() {
        return (
            <div className="Mroom">
                <form onSubmit={this.handleSubmit}>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1" id="title"
                                    value={this.state.title}>
                            <Form.Label>방 제목</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={this.handleInputChange}
                                          name="title"/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1" id="sports" value={this.state.sports}>
                            <Form.Label>운동 종목</Form.Label>
                            <Form.Control as="select" onChange={this.handleInputChange} name="sports">
                                <option selected disabled>Please select</option>
                                <option value="1">1</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1" id="area" value={this.state.area}>
                            <Form.Label>지역</Form.Label>
                            <Form.Control as="select" onChange={this.handleInputChange} name="area">
                                <option selected disabled>Please select</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
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

                        <Form.Group id="calendar" value={this.state.date}>
                            <Form.Label>날짜</Form.Label>
                            <Calendar name="date"
                                      onChange={this.onChangeDate}/>
                        </Form.Group>

                        {/* 각 시설 위치 지도 보여주면 좋을 듯*/}


                    </Form>
                    <Button  bg="primary" onClick={this.handleSubmit}>
                        개설하기
                    </Button>
                </form>

            </div>
        )
    }
}

export default MroomComponent;
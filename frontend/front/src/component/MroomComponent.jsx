import React, {Component} from "react";
import {Button, Form, Card} from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Mroom.css';
import moment from 'moment';
import axios from 'axios'
import {createRoom} from "../util/APIUtils"
import Alert from 'react-s-alert';
import MyMapPopUp from './MyMapPopUp'

class MroomComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            sports: '',
            area: '',
            date: '',
            createdDate: '',
            isCap : true,
            location:'',
            placeX:0,
            placeY:0,
        };
        //this.createRoom = this.createRoom.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange=(event)=> {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        // console.log(inputValue);

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit = (event) =>{
        // event.preventDefault();

        const createRoomRequest = Object.assign({}, this.state);

        createRoom(createRoomRequest)
            .then(response => {
                Alert.success("You're successfully create room!");
                const data = response;
                // console.log(data.id);
                this.props.history.push("/rooms/enter/" + data.id);
            }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
        // this.props.fromA(this.state.place);
    }



    onChangeDate = (date) => {
        // const moment = require('moment');
        // require('moment-timezone');
        // moment.tz.setDefault("Asia/Seoul");
        const dateC = moment(date).format("YYYY-MM-DD")
        // const now = moment().format("YYYY-MM-DD");
        console.log(dateC);
        console.log(date);
        // console.log(now);
        this.setState({
            date: dateC
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
    }

    Acallback =(dataFromB)=>{
        this.setState({
            area: dataFromB.name,
            placeX: dataFromB.x,
            placeY: dataFromB.y
        })
    }

    render() {
        return (
            <div className="Mroom">
                <Form onSubmit={this.onSubmit} required>
                    <Form.Group controlId="exampleForm.ControlSelect1" id="title"
                                value={this.state.title}>
                        <Form.Label>방 제목</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={this.handleInputChange}
                                      name="title" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="sports" value={this.state.sports} required>
                        <Form.Label>운동 종목</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputChange} name="sports">
                            <option selected disabled>Please select</option>
                            <option value="1">1</option>
                            <option value="축구">축구</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" id="area">
                        {/*<br/>*/}
                        {/*<Form.Control as="select" onChange={this.handleInputChange} name="area">*/}
                        {/*    <option selected disabled>Please select</option>*/}
                        {/*    <option value="a">a</option>*/}
                        {/*    <option value="b">b</option>*/}
                        {/*</Form.Control>*/}
                        {/*<Card className="card">*/}
                            <MyMapPopUp callbackFromA={this.Acallback}/>
                        {/*</Card>*/}
                    </Form.Group>

                    {/*<Form.Group controlId="exampleForm.ControlSelect1">*/}
                    {/*    <Form.Label>시설</Form.Label>*/}
                    {/*    <Form.Control as="select" onChange={this.onSelectChange} name="roomFacility">*/}
                    {/*        <option selected disabled>Please select</option>*/}
                    {/*        <option>A</option>*/}
                    {/*        <option>B</option>*/}
                    {/*        <option>C</option>*/}
                    {/*        <option>D</option>*/}
                    {/*        <option>E</option>*/}
                    {/*    </Form.Control>*/}
                    {/*</Form.Group>*/}

                    <Form.Group id="calendar" value={this.state.date}>
                        <Form.Label>날짜</Form.Label>
                        <Calendar name="date"
                                  onChange={this.onChangeDate}/>
                    </Form.Group>

                    <Button  bg="primary" onClick={this.handleSubmit}>개설하기</Button>
                </Form>
            </div>
        )
    }
}

export default MroomComponent;
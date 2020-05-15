import React, {useEffect, useState} from "react";
import {Form, Button} from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Mroom.css';
import customAxios from "../customAxios";


const Mroom = () => {
    const [ip,setIp] = useState('');
    function callback(data) {
        setIp(data);
    }

    useEffect(
        () => {
            // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
            customAxios('/room/create', callback);
        }, []
    );

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    //캘린더 관련 함수
    const state = {
        date: new Date(),
    }
    const onDateChange = date => {
        this.setState({date});
        console.log(date);
    }
    ////
    return(
        <div className="Mroom">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1" id="sports">
                    <Form.Label>방 제목</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1" id="sports">
                    <Form.Label>운동 종목</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1" id="area">
                    <Form.Label>지역</Form.Label>
                    <Form.Control as="select">
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                        <option>e</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1" id="facility">
                    <Form.Label>시설</Form.Label>
                    <Form.Control as="select">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group id="date">
                    <Form.Label>날짜</Form.Label>
                    <Calendar />
                </Form.Group>

                {/* 각 시설 위치 지도 보여주면 좋을 듯*/}

                <Button variant="dark" type="submit" onClick={()=>this.makeRoom()}>개설하기</Button>
            </Form>

            <br/>이 기기의 IP주소는 {ip}입니다.
        </div>
    )
}

export default Mroom;
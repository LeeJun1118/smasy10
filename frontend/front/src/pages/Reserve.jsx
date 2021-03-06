import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {myReservation, registerReview} from "../util/APIUtils";
import Alert from "react-s-alert";
// import '../css/Reserve.css';

class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            content: ''
        };
    }
    componentDidMount() {
        this.showMyResvList();
    }

    showMyResvList=()=>{
        myReservation()
            .then(response => {
                Alert.success("You're successfully checked reservations!");
                const data = response;
                console.log(JSON.stringify(data));
                this.setState({
                    reservations: data
                })
            }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            this.setState({
                reservations: []
            })
        });
    }

    handleSave = (e) => {
        const target = e.target;
        const id = target.name;
        // console.log("id : " + id);

        const registerReviewRequest = Object.assign({}, this.state);
        // console.log(registerReviewRequest);

        registerReview(registerReviewRequest, id)
            .then(response => {
                Alert.success("You're successfully registered a review!");
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }
    handleInputChange = (event) => {
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        this.setState({content:inputValue})
    }

    render() {
        const {reservations} = this.state;
        return (
            <div className="Reserve">
                <Table striped bordered hover id="table">
                    <caption className="caption">예약 내역</caption>
                    <thead>
                    <tr>
                        <th>방 번호</th>
                        <th>장소</th>
                        <th>운동 종목</th>
                        <th>경기 날짜</th>
                        <th>예약 보기</th>
                        <th>리뷰 쓰기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservations.length === 0 ?
                            (<tr align="center">
                                <td colSpan="7">예약 내역이 없습니다.</td>
                            </tr>)
                            :
                            reservations.map((resv) => (
                                <tr key={resv.id}>
                                    <td>{resv.id}</td>
                                    <td>{resv.roomArea}</td>
                                    <td>{resv.roomSports}</td>
                                    <td>{resv.roomDate}</td>
                                    <td >
                                        {/*<Link to={"/rooms/" + room.id} className="btn btn-sm btn-outline-primary">입장</Link>*/}
                                        <Link  onClick={()=>this.props.history.push("/rooms/enter/" + resv.roomId)}>확인</Link>
                                    </td>
                                    <td >
                                        <Dialog resvId={resv.id} onSave={this.handleSave} onTyping={this.handleInputChange}/>
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

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Review
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form.Control type="text" placeholder="Enter Contents"
                                  onChange={props.onTyping}
                                  name="content"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={props.onSave} name={props.resvId}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Dialog(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Link onClick={() => setModalShow(true)} >작성</Link>
            {/*<Button >버튼</Button>*/}
            <MyVerticallyCenteredModal
                show={modalShow}
                onTyping={props.onTyping}
                onHide={() => setModalShow(false)}
                onSave={props.onSave}
                resvId={props.resvId}
            />
        </>
    );
}


export default Reserve;
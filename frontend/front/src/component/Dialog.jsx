import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // reviews: [],
            review :''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            review : inputValue
        });
    }

    const [modalShow, setModalShow] = React.useState(false);

    handleClose = () => setShow(false);
    handleShow = () => setShow(true);
    handleSave = () =>{

    }

    render() {
        const {reviews} = this.state;
        return (
            <div className="Dialog">
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
                        <h4>Centered Modal</h4>
                        {/*<Form.Group controlId="exampleForm.ControlSelect1" id="title"*/}
                        {/*    // value={this.state.title}*/}
                        {/*>*/}
                        {/*    <Form.Control type="text" placeholder="Enter review" onChange={this.handleInputChange}*/}
                        {/*                  name="review"/>*/}
                        {/*</Form.Group>*/}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                        <Button variant="primary" onClick={this.handleSave}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};


export default Review;
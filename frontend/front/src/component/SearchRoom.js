import React from "react";
import {InputGroupText} from "react-bootstrap/InputGroup";
import {Form} from "react-bootstrap";

function SearchRoom(props) {
    const {roomTextSearch,handleSearchRoom} = props;

    return(
        <Form>
            <Form.Group controlId="search">
                <Form.Label>검색</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
        </Form>
    )

}

export default SearchRoom;
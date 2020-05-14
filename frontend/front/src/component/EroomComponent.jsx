import React, {Component} from "react";
import Eroom from "../pages/Eroom";
import axios from "axios";
import {Card, Table} from 'react-bootstrap'

/*const ShowRoom = (props) => (
    <tr>
        <td>{props.eroom.roomNumber}</td>
        <td>{props.eroom.roomSport}</td>
        <td>{props.eroom.roomArea}</td>
        <td>{props.eroom.roomFacility}</td>
        <td>{props.eroom.roomDate}</td>
        <td>1</td>
    </tr>
);*/

class EroomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*roomNumber: "",
            roomSport: "",
            roomArea: "",
            roomFacility: "",
            roomDate: "",*/
            rooms: [],
            search: '',
            currentPage: 1,
            roomsPerPage: 5,
            sortToggle: true
        };
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
        this.findAllRooms(this.state.currentPage);
    }

    componentDidMount() {
        this.findAllRooms(this.state.currentPage);
    }

    findAllRooms() {
        fetch("http://localhost:8080/api/rooms")
            .then(response => response.json()
            )
            .then((data) => {
                this.setState({rooms: data});
            })
    }

    /*findAllRooms(currentPage) {
        currentPage -= 1;
        let sortDir = this.state.sortToggle ? "asc" : "desc";
        axios
            .get("http://localhost:8080/api/room/list?pageNumber=" + currentPage + "&pageSize=" + this.state.roomsPerPage + "&sortBy=price&sortDir=" + sortDir)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    //allAssignments: res.data,
                    rooms: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1,
                });
            });
    };*/


    changePage = event => {
        let targetPage = parseInt(event.target.value);
        if (this.state.search) {
            this.searchData(targetPage);
        } else {
            this.findAllRooms(targetPage);
        }
        this.setState({
            [event.target.name]: targetPage
        });
    };

    firstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (this.state.search) {
                this.searchData(firstPage);
            } else {
                this.findAllRooms(firstPage);
            }
        }
    };

    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
            if (this.state.search) {
                this.searchData(this.state.currentPage - prevPage);
            } else {
                this.findAllRooms(this.state.currentPage - prevPage);
            }
        }
    };

    lastPage = () => {
        let condition = Math.ceil(this.state.totalElements / this.state.roomsPerPage);
        if (this.state.currentPage < condition) {
            if (this.state.search) {
                this.searchData(condition);
            } else {
                this.findAllRooms(condition);
            }
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.roomssPerPage)) {
            if (this.state.search) {
                this.searchData(this.state.currentPage + 1);
            } else {
                this.findAllRooms(this.state.currentPage + 1);
            }
        }
    };

    searchChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    cancelSearch = () => {
        this.setState({"search": ''});
        this.findAllRooms(this.state.currentPage);
    };

    searchData = (currentPage) => {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/room/list/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.roomsPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    rooms: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };


    /*getRows() {
        if (!this.state.allAssignments && !this.state.allAssignments.length) return null;
        return this.state.allAssignments.map((currentAssignment, id) => {
            return <ShowRoom book={currentAssignment} key={id} />
        });
    }*/
    render() {
        const {rooms, currentPage, totalPages, search} = this.state;
        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Table>
                            <thead>
                            <tr>
                                <th>방 제목</th>
                                <th>지역</th>
                                <th>운동 종목</th>
                                <th>최종수정시간</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                rooms.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="7">방이 없습니다.</td>
                                    </tr> :
                                    rooms.map((room) => (
                                        <tr key={room.id}>
                                            <td>{room.title}</td>
                                            <td>{room.area}</td>
                                            <td>{room.sport}</td>
                                            <td>{room.date}</td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default EroomComponent
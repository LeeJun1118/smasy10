import React, {Component} from "react";
import {Card, Table, Button, Form, FormControl, Col} from 'react-bootstrap'
import '../css/Eroom.css';
import {Link} from "react-router-dom";
import {getUserCounts, searchRooms} from "../util/APIUtils";
import Alert from "react-s-alert";

class EroomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            search: '',
            currentPage: 1,
            roomsPerPage: 5,
            sortToggle: true,
            roomsSearch:'',
            isCap: false,
            usersCount:0
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSearchRoom = this.handleSearchRoom.bind(this);
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
        this.findAllRooms(this.state.currentPage);
    }

    componentDidMount() {
        this.findAllRooms(this.state.currentPage);

        // this.state.rooms.map((room)=>{
        //     getUserCounts(room.id)
        //         .then(response => {
        //             const data = response;
        //             console.log(JSON.stringify(data));
        //
        //         }).catch(error => {
        //     });
        // })
    }

    findAllRooms() {
        fetch("http://localhost:8080/api/rooms")
            .then(response => response.json()
            )
            .then((data) => {
                this.setState({rooms: data});
                console.log("data = " + JSON.stringify(data));
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


    /*changePage = event => {
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
    };*/

    /*getRows() {
        if (!this.state.allAssignments && !this.state.allAssignments.length) return null;
        return this.state.allAssignments.map((currentAssignment, id) => {
            return <ShowRoom book={currentAssignment} key={id} />
        });
    }*/
    onRoomEnter = (id) => {
        // this.state.rooms.map((room) =>(
        //             window.location.assign('/enter/' + room.id)
        //         ));
        // history.push('/room');
        // return this.props.history.push("/");
        // this.props.history.push("/enter/"+id);
    }

    handleInputChange = (event) => {
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            roomsSearch : inputValue
        });
    }
    handleSearchRoom = (event) => {
        // event.preventDefault();
        const text = this.state.roomsSearch;

        searchRooms(text)
            .then(response => {
                Alert.success("You're successfully searched for a room!");
                const data = response;
                // console.log("data = " + JSON.stringify(data));
                this.setState({ rooms: data });
            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
                this.setState({ rooms: [] });
            });
    }

    onKeyPress = (e) =>{
        if(e.key == 'Enter'){
            this.handleSearchRoom();
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        const {rooms, currentPage, totalPages, search, usersCount} = this.state;
        return (
            <div className="Eroom">
                <Form inline className="form" onKeyPress={this.onKeyPress} onSubmit={this.onSubmit}>
                    <Form.Group>
                    <FormControl type="text" placeholder="Search"
                                 onChange={this.handleInputChange}
                                 name="roomsSearch"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSearchRoom}>검색</Button>
                </Form>
                {/*<Card style={{width: '18rem'}}>*/}
                {/*    <Card.Body>*/}
                        <Table striped bordered hover id="table">
                            <thead>
                            <tr>
                                <th>방 번호</th>
                                <th>방 제목</th>
                                <th>장소</th>
                                <th>운동 종목</th>
                                <th>경기 날짜</th>
                                <th>현재 인원</th>
                                <th>입장 하기</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                rooms.length === 0 ?
                                    (<tr align="center">
                                        <td colSpan="7">방이 없습니다.</td>
                                    </tr>)
                                :
                                    rooms.map((room) => (
                                        (!room.state)?(
                                            <tr key={room.id} >
                                                <td>{room.id}</td>
                                                <td>{room.title}</td>
                                                <td>{room.area}</td>
                                                <td>{room.sports}</td>
                                                <td>{room.date}</td>
                                                <td>{usersCount}</td>
                                                <td >
                                                    {/*<Link to={"/rooms/" + room.id} className="btn btn-sm btn-outline-primary">입장</Link>*/}
                                                    <Link to={this.props.match.url+ "/enter/" + room.id }>입장</Link>
                                                </td>
                                            </tr>
                                        ):(<></>)
                                    ))
                            }
                            </tbody>
                        </Table>
                {/*    </Card.Body>*/}
                {/*</Card>*/}

            </div>
        )
    }
}

export default EroomComponent
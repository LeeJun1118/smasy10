import React, { Component } from 'react';
import './Profile.css';
import {Button, Table} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import Reserve from "../../pages/Reserve";
import Review from "../../pages/Review";
import {getUserInfo} from "../../util/APIUtils";

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            infos: []
        };
    }
    componentDidMount() {
        getUserInfo(this.props.match.params.id)
            .then(response => {
                const data = response;
                console.log(data.room);
                this.setState({infos: data});
            }).catch(error => {
                this.setState({infos: []});
            });
    }
    render() {
        const {infos} = this.state;
        return (
            <div className="Profile">
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                </div>    
            </div>
                <Button variant="primary" className="btn" href={this.props.match.url+ "/reserve"}>
                    예약 내역</Button>
                <Button variant="primary" className="btn" href={this.props.match.url+ "/review"}>
                    리뷰</Button>

                <Table striped bordered hover className="table">
                    <caption className="caption">현재 입장한 방</caption>
                    <tr><th>번호</th><th>제목</th><th>지역</th><th>운동 종목</th><th>경기 날짜</th><th>입장</th></tr>
                    {
                        infos.length === 0 ?
                            (<tr align="center">
                            <td colSpan="7">입장한 방이 없습니다.</td>
                        </tr>):
                        infos.map((info) => (
                            <tr>
                            <td>{info.id}</td>
                            <td>{info.title}</td>
                            <td>{info.area}</td>
                            <td>{info.sports}</td>
                            <td>{info.date}</td>
                            <td>
                                <Link to={"/rooms/enter/" + info.id + "/" + this.state.isCap}>입장</Link>
                            </td>
                        </tr>
                        ))
                    }
                </Table>
            </div>

        );
    }
}

export default Profile
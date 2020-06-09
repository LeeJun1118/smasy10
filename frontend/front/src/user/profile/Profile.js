import React, { Component } from 'react';
import './Profile.css';
import {Button} from "react-bootstrap";
import {Route} from "react-router-dom";
import Reserve from "../../pages/Reserve";
import Review from "../../pages/Review";

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
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
            </div>

        );
    }
}

export default Profile
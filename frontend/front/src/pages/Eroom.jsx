import React from "react";
import {Table} from "react-bootstrap";
import '../css/Eroom.css';
/*import moment from 'moment';

const cx = classNames.bind(styles);*/

const Eroom = ({ id, title, sport, area, resDate, memCount }) => {
    if (id === undefined) {
        return null;
    }

    return(
        <div className="Eroom">

            <Table striped bordered hover id="table">
                <thead>
                <tr><th>#</th><th>제목</th><th>종목</th><th>지역</th><th>날짜</th><th>인원</th></tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>축구</td>
                    <td>부산 남구</td>
                    <td>경성대학교 건학기념관 운동장</td>
                    <td>2020-06-12</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>야구</td>
                    <td>부산 부산진구</td>
                    <td>공원 야구장</td>
                    <td>2020-05-19</td>
                    <td>3</td>
                </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Eroom
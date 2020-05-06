import React, {useEffect, useState} from "react";
import customAxios from "../customAxios";

const Mroom = () => {
    const [ip,setIp] = useState('');
    function callback(data) {
        setIp(data);
    }
    useEffect(
        () => {
            // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
            customAxios('/makeAroom', callback);
        }, []
    );
    return(
        <div className="Mroom">
            방 만드는 페이지
            <br/>
            이 기기의 IP주소는 {ip}입니다.
        </div>
    )
}

export default Mroom;
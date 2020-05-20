/*global kakao*/
import React, { Component } from "react";
import '../css/PopUp.css';

class PopUp extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=본인의 앱키&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7
                };

                const map = new window.kakao.maps.Map(container, options);

            });
        };
    }

    render() {
        return(
            <div>
                <div  id="Mymap"/>
            </div>
        )
    }
}

export default PopUp;
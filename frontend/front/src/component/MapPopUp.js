/*global kakao*/
import React, { Component } from "react";
import '../css/MapPopUp.css';
const { kakao } = window;

class MapPopUp extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=eee07da53bc4c518e9c78198be5dfba7&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new window.kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7
                };

                const map = new window.kakao.maps.Map(container, options);


                var marker = new window.kakao.maps.Marker({ // 마커를 생성
                    position: new window.kakao.maps.LatLng(37.506502, 127.053617) // 마커가 표시될 위치입니다
                });
                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
                // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
                // marker.setMap(null);

            });
        };
    }

    render() {
        return(
            <div>
                <div className="MapPopUp" id="Mymap"></div>
            </div>
        )
    }
}

export default MapPopUp;
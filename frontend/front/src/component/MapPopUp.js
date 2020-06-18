/*global kakao*/
/*global daum*/
import React, { Component } from "react";
import '../css/MapPopUp.css';
const { kakao } = window;

class MapPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: []
        };
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=105a9f622469f29871a3a2ab2f40c336&libraries=services&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                let staticContainer = document.getElementById('staticMap');
                // let staticOptions = {
                //     center: new window.kakao.maps.LatLng(place.y, place.x),
                //     level: 3
                // };

                // const map = new window.kakao.maps.StaticMap(staticContainer, staticOptions);
                // 주소-좌표 변환 객체를 생성합니다
                var ps = new window.kakao.maps.services.Places();

                // 키워드로 장소를 검색합니다
                ps.keywordSearch(this.props.placeName,(data, status, pagination) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const place = data[0];
                        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                        // LatLngBounds 객체에 좌표를 추가합니다
                        // const bounds = new window.kakao.maps.LatLngBounds();
                        let jsonStr = '{"name": "' + place.place_name +'" ,"phoneNo":"'+ place.phone +'", "address" :" ' + place.road_address_name + '", "addr":" '+place.address_name + ' "}';
                        let jsonObj = JSON.parse(jsonStr);
                        this.setState({ place : jsonObj});

                        this.props.callbackFromA(this.state.place);

                        const marker = new window.kakao.maps.Marker({
                            position: new window.kakao.maps.LatLng(place.y, place.x)
                        });

                        let staticOptions = {
                            center: new window.kakao.maps.LatLng(place.y, place.x),
                            level: 3,
                            marker: marker
                        };
                        const map = new window.kakao.maps.StaticMap(staticContainer, staticOptions);

                        // bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
                        // }

                        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                        // map.setCenter(bounds);
                        // marker.setMap(map);
                    }} );


            });
        };
    }

    render() {
        return(
            <div>
                <div className="MapPopUp" id="staticMap"></div>
            </div>
        )
    }
}

export default MapPopUp;
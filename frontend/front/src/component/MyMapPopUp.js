/*global kakao*/
/*global daum*/
import React, {Component, useEffect} from "react";
import '../css/MapPopUp.css';
import {Button, Form, FormControl} from "react-bootstrap";
import pl from "moment/locale/pl";
import Alert from "react-s-alert";
const { kakao } = window;

class MyMapPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '경성대학교',
            place: []
        };
         // this.displayInfowindow = this.displayInfowindow.bind(this);
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=105a9f622469f29871a3a2ab2f40c336&libraries=services&autoload=false";
        // script.src = = "http://apis.daum.net/maps/maps3.js?apikey=eee07da53bc4c518e9c78198be5dfba7"
        document.head.appendChild(script);

        script.onload = () => {
        // useEffect( () => {
            window.kakao.maps.load(() => {

                const container = document.getElementById('map'); // 지도를 표시할 div
                // const container = this.mapRef // 지도를 표시할 div
                const options = {
                    center: new window.kakao.maps.LatLng(35.139778, 129.098500), // 지도의 중심좌표
                    level: 4 // 지도의 확대 레벨
                };

                // 지도를 생성합니다
                const map = new window.kakao.maps.Map(container, options);

                // const geocoder = new window.kakao.maps.services.Geocoder();

                const keyword = this.state.keyword;
                // console.log("keyword = " + keyword);
                // const bounds = new window.kakao.maps.LatLngBounds();
                // 장소 검색 객체를 생성합니다
                const ps = new window.kakao.maps.services.Places();
                // 키워드로 장소를 검색합니다 // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                ps.keywordSearch(keyword, (data, status, pagination) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                        // LatLngBounds 객체에 좌표를 추가합니다
                        const bounds = new window.kakao.maps.LatLngBounds();

                        for (let i = 0; i < data.length; i++) {
                            displayMarker(data[i]);
                            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                        }
                        map.setBounds(bounds);
                    }else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
                        // window.alert('검색 결과가 존재하지 않습니다.');
                        Alert.error("No results were found for your search!");
                        return;
                    } else if (status === window.kakao.maps.services.Status.ERROR) {
                        Alert.error((status && status.message) || 'Oops! Something went wrong. Please try again!');
                        return;
                    }
                });

                // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                const displayInfowindow = (marker, place) => {
                    const infowindow = new window.kakao.maps.InfoWindow({zIndex: 1});
                    const content = '<div style="padding:5px;z-index:1;">' + place.place_name + '</div>';
                    infowindow.setContent(content);
                    infowindow.open(map, marker);

                    let jsonStr = '{"name": "' + place.place_name +'" , "x":'+place.x+', "y":'+place.y
                        +  ', "phone":"'+ place.phone +'", "road" :" ' + place.road_address_name + '", "addr":" '+place.address_name + ' "}';
                    let jsonObj = JSON.parse(jsonStr);
                    this.setState({ place : jsonObj});

                    this.props.callbackFromA(this.state.place);

                    // console.log("place : " + this.state.place.name + this.state.place.x +" "+ this.state.place.y);
                    // console.log( this.state.place.phone +" "+ this.state.place.road +" "+ this.state.place.addr);
                    // console.log("place2 : " + jsonObj.name + jsonObj.x +" "+ jsonObj.y);
                    // console.log(place.phone +","+ place.address_name +"," + place.road_address_name );
                }

                // 지도에 마커를 표시하는 함수입니다
                const displayMarker = (place) => {
                    // 마커를 생성하고 지도에 표시합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: new window.kakao.maps.LatLng(place.y, place.x)
                    });

                    window.kakao.maps.event.addListener(marker, 'click', function () {
                        displayInfowindow(marker, place);
                        const bounds = new window.kakao.maps.LatLngBounds();
                        bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
                        map.setBounds(bounds);
                    });
                    // window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                    //     displayInfowindow(marker, place);
                    // });
                    //
                    // window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                    //     infowindow.close();
                    // });

                    // marker.setMap(map);
                }

                // function searchDetailAddrFromCoords(coords, callback) {
                //     // 좌표로 법정동 상세 주소 정보를 요청합니다
                //     geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                // }

                // 마커가 지도 위에 표시되도록 설정합니다
                // marker.setMap(map);
                // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
                // marker.setMap(null);

            });

        }
        // }, []);
    }

    handleInputChange = (event) =>{
        const target = event.target;
        // const inputName = target.name;
        const inputValue = target.value;
        // console.log("keyword =" + inputValue);
        this.setState({
            keyword : inputValue
        });
    }
    handleSearch = () =>{
        this.componentDidMount();
    }
    onKeyPress = (e) =>{
        if(e.key == 'Enter'){
            this.handleSearch();
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        return(
            <div >
                <Form inline className="form" onKeyPress={this.onKeyPress} onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>장소&nbsp;</Form.Label>
                        <FormControl type="text" placeholder="location"
                                     onChange={this.handleInputChange}
                                     name="roomsSearch"/>
                    </Form.Group>
                    <Button variant="outline-primary" onClick={this.handleSearch}>검색</Button>
                    <div className="MyMapPopUp" id="map"></div>
                </Form>

            </div>
        )
    }
}

export default MyMapPopUp;

import React, { Component } from 'react';
import Kakao from 'kakaojs';

class KakaoLogin extends Component{

    componentDidMount(){
        console.log("hello-------");
        Kakao.init('e9c4b1d97b8bac697985d17eb59516b3');
        console.log(Kakao);
        Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: function(authObj) {
                alert(JSON.stringify(authObj));
            },
            fail: function(err) {
                alert(JSON.stringify(err));
            }
        });
    }
    render(){
        return (
            <div>
            <a id="kakao-login-btn"></a>
            </div>
    );
    }
}

export default KakaoLogin;
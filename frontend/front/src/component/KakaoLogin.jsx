import React, { Component } from 'react';
import Kakao from 'kakaojs';

class KakaoLogin extends Component{

    componentDidMount(){
        console.log("hello-------");
        Kakao.init('eee07da53bc4c518e9c78198be5dfba7');
        console.log(Kakao.isInitialized());

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
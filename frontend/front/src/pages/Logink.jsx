import React from 'react';
import Kakao from 'kakaojs';

const Logink = () => {
    return (
        <div>
            <a id="kakao-login-btn" onClick={handleClickKakaoLogin}></a>
            <a href="http://developers.kakao.com/logout"></a>
        </div>
    );

    const componentDidMount = () => {
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
}

const handleClickKakaoLogin = () => {
    this.state.kakao.Auth.login({
        success: (response) => {
            console.log(response);
        }
    })
}

export default Logink;
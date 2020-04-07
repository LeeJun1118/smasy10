package com.smasy10.apple.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

//**lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드 자동 생성
@Getter

//선언된 모든 final 필드가 포함된 생성자를 생성
//final 이 없는 필드는 생성자에 포함X
@RequiredArgsConstructor
public enum  Role {

    //로그인한 사용자와 안한 사용자 구분을 위한 Role 설정
    GUEST("ROLE_GUEST","손님"),
    USER("ROLE_USER","일반사용자");

    private final String key;
    private final String title;
}

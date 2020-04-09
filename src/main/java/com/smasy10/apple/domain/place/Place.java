package com.smasy10.apple.domain.place;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드 자동 생성
@Getter

//기본 생성자 자동 추가
//public 클래스명(){} 과 같음
@NoArgsConstructor

//JPA 어노테이션
//테이블과 연결될 클래스임을 나타냄
//기본값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭함(ex: SalesManager.java -> sales_manager table)
@Entity
public class Place {

    //해당 테이블의 PK 필드를 나타냄
    @Id

    //PK 생성 규칙을 나타냄 strategy = GenerationType.IDENTITY 로 자동 증가 됨
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //테이블의 컬럼을 나타내면 굳이 선언하지 않아도 해당 클래스의 모든 필드는 모두 컬럼이 됨.
    //기본 값 외에 추가 변경 옵션이 있을 때 사용
    //문자열의 경우 기본값은 varchar(255)인데 500으로 바꿈
    @Column(length = 500,nullable = false)
    private String address;

    @Column
    private String phoneNo;

}

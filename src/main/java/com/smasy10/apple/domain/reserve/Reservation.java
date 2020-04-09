package com.smasy10.apple.domain.reserve;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

//**lombok 어노테이션
//클래스 내 모든 필드의 Getter 매소드 자동 생성
@Getter

//기본 생성자 자동 추가
//public Posts(){} 와 같은 효과
@NoArgsConstructor

//**JPA 어노테이션
//테이블과 연결될 클래스임을 나타냄
//기본값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭함 (ex SalesManager.java => sales_manager table)
@Entity
public class Reservation {

    //해당 테이블의 PK 필드를 나타냄
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;


}

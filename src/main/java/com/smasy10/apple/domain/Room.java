package com.smasy10.apple.domain;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

//lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드를 자동 생성
@Getter

//기본 생성자 자동 추가
//public 클래스명(){} 와 같은 효과
@NoArgsConstructor

//JPA 어노테이션
//테이블과 연결될 클래스임을 나타냄
//기본 값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭(ex: SalesManager.java -> sales_manager table)
@Entity
public class Room {

    //해당 테이블의 PK 필드를 나타냄
    @Id

    //PK 의 생성 규칙을 나타냄 strategy = GenerationType.IDENTITY 로 자동 증가 됨
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //테이블의 컬럼을 나타내며 굳이 선언하지 않아도 해당 클래스의 필드는 모두 컬럼이 됨
    //기본 값 외에 추가 옵션이 있을 때 사용
    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String sportsType;

   /* @ManyToOne(fetch = FetchType.LAZY)
    private User header;*/

    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Room(String title, String area, String sportsType) {
        this.title = title;
        this.area = area;
        this.sportsType = sportsType;
    }

/*    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Room(String title, String area, String sportsType, User header) {
        this.title = title;
        this.area = area;
        this.sportsType = sportsType;
        this.header = header;
    }*/
}

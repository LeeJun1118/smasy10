package com.smasy10.apple.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

//lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드 자동 생성
@Getter
@Setter

//기본 생성자 자동 추가
//public 클래스명(){} 과 같음
@NoArgsConstructor

@AllArgsConstructor
@Builder
//@EqualsAndHashCode(of = "id")

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

    @Column(nullable = false)
    private String name;

    //테이블의 컬럼을 나타내면 굳이 선언하지 않아도 해당 클래스의 모든 필드는 모두 컬럼이 됨.
    //기본 값 외에 추가 변경 옵션이 있을 때 사용
    //문자열의 경우 기본값은 varchar(255)인데 500으로 바꿈
    @Column(length = 500,nullable = false)
    private String address;

    @Column
    private String phoneNo;

    @Column
    private Double placeX;

    @Column
    private Double placeY;

    //일대다 매핑
    //엔티티 자신을 기준으로 다중성을 생각해야함
    //mappedBy 속성을 사용해 연관관계의 주인을 정함
    //replies 의 주인은 place(replies 는 place 에 의해 매핑됨)
    //LAZY 옵션은 Room 객체를 조회하는 시점이 아닌 객체가 실제로 사용될 때 조회하는 옵션
    @OneToMany(mappedBy = "place")
    @JsonIgnore
    //실제로 DB에 저장될 때는 Reply 의 PK 값이 저장됨.
    private List<Reply> replies;

    @OneToMany(mappedBy = "place")
    //실제로 DB에 저장될 때는 Reply 의 PK 값이 저장됨.
    @JsonIgnore
    private List<Reservation> reservations;

    /*//해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Place(String name, String address, String phoneNo, List<Reply> replies) {
        this.name = name;
        this.address = address;
        this.phoneNo = phoneNo;
        this.replies = replies;
    }*/
    /*public Place(String name, String address, String phoneNo) {
        this.name = name;
        this.address = address;
        this.phoneNo = phoneNo;
    }*/

    public Place(Long id) {
        this.id = id;
    }
}

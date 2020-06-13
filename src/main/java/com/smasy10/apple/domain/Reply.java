package com.smasy10.apple.domain;


import lombok.*;

import javax.persistence.*;


//lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드를 자동 생성
@Getter
@Setter

//기본 생성자 자동 추가
//public 클래스명(){} 와 같은 효과
@NoArgsConstructor

@AllArgsConstructor
@Builder
//@EqualsAndHashCode(of = "id")

//JPA 어노테이션
//테이블과 연결될 클래스임을 나타냄
//기본 값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭함(ex:SalesManger.java -> sales_manager table)
@Entity
//BaseTimeEntity 을 상속하여 필드들(createDate,modifiedDate)도 컬럼으로 인식
public class Reply extends BaseTimeEntity {

    //해당 테이블의 PK 필드를 나타냄
    @Id

    //PK 생성 규칙을 나타냄 strategy = GenerationType.IDENTITY 로 자동 증가 됨
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //테이블의 컬럼을 나타내면 굳이 선언하지 않아도 해당 클래스의 모든 필드는 모두 컬럼이 됨.
    //기본 값 외에 추가 변경 옵션이 있을 때 사용
    //옵션 : null 허용 안함,문자열의 경우 기본값은 varchar(255)인데 500으로 바꿈
    @Column(nullable = false,length = 500)
    private String content;

    //다대일 매핑
    //엔티티 자신을 기준으로 다중성을 생각해야함
    //LAZY 옵션은 Room 객체를 조회하는 시점이 아닌 객체가 실제로 사용될 때 조회하는 옵션
    @ManyToOne(fetch = FetchType.LAZY)
    //실제로 DB에 저장될 때는 User 의 PK 값이 저장됨.
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "place_id")
    private Place place;

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "place_id")
    private Room room;

}

package com.smasy10.apple.domain.reply;


import com.smasy10.apple.domain.BaseTimeEntity;
import com.smasy10.apple.domain.place.Place;
import com.smasy10.apple.domain.user.User;
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
    private String contents;

    //다대일 매핑
    //엔티티 자신을 기준으로 다중성을 생각해야함
    //LAZY 옵션은 Room 객체를 조회하는 시점이 아닌 객체가 실제로 사용될 때 조회하는 옵션
    @ManyToOne(fetch = FetchType.LAZY)
    //외래키를 매핑할 떄 사용
    //name 속성에는 매핑할 외래 키 이름을 지정
    //User 의 id 를 외래키로 가지므로 user_id 로 작성
    @JoinColumn(name = "user_id")
    //실제로 DB에 저장될 때는 User 의 PK 값이 저장됨.
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Reply(String contents, User user, Place place) {
        this.contents = contents;
        this.user = user;
        this.place = place;
    }
}

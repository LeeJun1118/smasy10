package com.smasy10.apple.domain.reserve;

import com.smasy10.apple.domain.BaseTimeEntity;
import com.smasy10.apple.domain.place.Place;
import com.smasy10.apple.domain.room.Room;
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
//BaseTimeEntity 을 상속하여 필드들(createDate,modifiedDate)도 컬럼으로 인식
public class Reservation extends BaseTimeEntity {

    //해당 테이블의 PK 필드를 나타냄
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //도메인 Reservation 와 Reservation 이 필드값으로 갖고 있는 Room 도메인을 1:1 관계로 설정하는 어노테이션
    //실제로 DB에 저장될 때는 Room 의 PK 값이 저장됨.
    //LAZY 옵션은 Room 객체를 조회하는 시점이 아닌 객체가 실제로 사용될 때 조회하는 옵션
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "place_id")
    private Place place_id;
}

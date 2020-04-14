package com.smasy10.apple.domain.reserve;

import com.smasy10.apple.domain.BaseTimeEntity;
import com.smasy10.apple.domain.place.Place;
import com.smasy10.apple.domain.room.Room;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    //일대일 매핑 어노테이션
    //LAZY 옵션은 Room 객체를 조회하는 시점이 아닌 객체가 실제로 사용될 때 조회하는 옵션
    @OneToOne(fetch = FetchType.LAZY)
    //외래키를 매핑할 떄 사용
    //name 속성에는 매핑할 외래 키 이름을 지정
    //Room 의 id 를 외래키로 가지므로 room_id 로 작성
    @JoinColumn(name = "room_id")
    //실제로 DB에 저장될 때는 Room 의 PK 값이 저장됨.
    private Room room;

    //다대일 매핑 어노테이션
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "place_id")
    private Place place;

    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Reservation(Room room, Place place) {
        this.room = room;
        this.place = place;
    }

}

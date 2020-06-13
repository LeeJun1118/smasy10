package com.smasy10.apple.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
//기본 값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭(ex: SalesManager.java -> sales_manager table)
@Entity
public class Room extends BaseTimeEntity{

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
    private String sports;

    @Column(nullable = false)
    private String date;

   /* @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<User> users = new ArrayList<>();*/

    @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<UserRoom> userRooms= new ArrayList<>();

    @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<Reply> replies = new ArrayList<>();

    //나중에 삭제
    public Room(String title,String area,String sports,String date) {
        this.title = title;
        this.area = area;
        this.sports = sports;
        this.date = date;
    }

    public void update(String title,String area,String sports) {
        this.title = title;
        this.area = area;
        this.sports = sports;
    }

    /*public Room(String title, String area, String sports, String date) {
        this.title = title;
        this.area = area;
        this.sports = sports;
        this.date = date;
    }

    //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder
    public Room(String title, String area, String sports, String date, List<User> users) {
        this.title = title;
        this.area = area;
        this.sports = sports;
        this.date = date;
        this.users = users;
    }

    public List<User> getUsers(){
        return users;
    }

    public void setUsers(List<User> users){
        this.users = users;
    }

    @Override
    public String toString() {
        return "Room{" +
                "users=" + users +
                '}';
    }*/
}

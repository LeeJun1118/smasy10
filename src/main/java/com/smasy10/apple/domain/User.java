package com.smasy10.apple.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

//소셜로그인데모프로젝트코드
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})

//lombok 어노테이션
//클래스 내 모든 필드의 Get 매소드를 자동 생성
@Getter
@Setter

//기본 생성자 자동 추가
//public 클래스명(){} 와 같은 효과
@NoArgsConstructor

@AllArgsConstructor
//@EqualsAndHashCode(of = "id")


//해당 클래스의 빌더 패턴 클래스 생성
//생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
@Builder

//JPA 어노테이션
//테이블과 연결될 클래스임을 나타냄
//기본 값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭(ex: SalesManager.java -> sales_manager table)
@Entity
public class User /*extends BaseTimeEntity*/ {

    //해당 테이블의 PK 필드를 나타냄
    @Id

    //PK 의 생성 규칙을 나타냄 strategy = GenerationType.IDENTITY 로 자동 증가 됨
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    //테이블의 컬럼을 나타내면 굳이 선언하지 않아도 해당 클래스의 모든 필드는 모두 컬럼이 됨.
    //기본 값 외에 추가 변경 옵션이 있을 때 사용
    //문자열의 경우 기본값은 varchar(255)인데 500으로 바꿈
    @Email
    @Column(nullable = false)
    private String email;

    //소셜로그인데모프로젝트코드
    private String imageUrl;

    @Column(nullable = false)
    private Boolean emailVerified = false;

    @JsonIgnore
    private String password;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

    /*@ManyToOne
    private Room room;*/

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<UserRoom> userRooms;

    /*\
    public User(Long id) {
    }*/

    /*@OneToMany(mappedBy = "user")
    private Set<Room> rooms;

    public User(Long id) {
        this.id = id;
    }

    public User(Long id, String name) {
        this.id = id;
        this.name = name;
    }*/

   /* //해당 클래스의 빌더 패턴 클래스 생성
    //생성자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함
    @Builder*/
    /*public User(String name, String email, String phoneNo, String address, Role role) {
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.address = address;
        this.role = role;
    }
*/
    /*public User(String name, String email, String phoneNo, String address, Role role, Room room) {
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.address = address;
        this.role = role;
        this.room = room;
    }*/

    /*public User update(String name, String email, String phoneNo, String address) {
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.address = address;

        return this;
    }*/

    /*public Room getRoom(){
        return this.room;
    }

    public void setRooms(Room room){
        this.room = room;
    }

    @Override
    public String toString() {
        return "User{" +
                "room=" + room +
                '}';
    }

    public String getRoleKey() {
        return this.role.getKey();
    }*/
}

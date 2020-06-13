package com.smasy10.apple.domain;


import lombok.*;

import javax.persistence.*;

//소셜로그인데모프로젝트코드
@Table(name = "userRoom")

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

@Entity
public class UserRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Room room;

}

package com.smasy10.apple.domain.reply;


import com.smasy10.apple.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDate;


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

}

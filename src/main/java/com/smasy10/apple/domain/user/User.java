package com.smasy10.apple.domain.user;

import com.smasy10.apple.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phoneNo;

    @Column(nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder
    public User(String name, String phoneNo, String address, Role role) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.role = role;
    }

    public User update(String name, String phoneNo,String address){
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;

        return this;
    }
}

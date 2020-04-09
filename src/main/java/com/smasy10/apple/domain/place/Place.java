package com.smasy10.apple.domain.place;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
public class Place {
    @Id
    @Column
    private Long id;

    @Column(nullable = false)
    private String address;

    @Column
    private String phoneNo;

}

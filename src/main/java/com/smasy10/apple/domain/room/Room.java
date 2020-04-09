package com.smasy10.apple.domain.room;

import com.smasy10.apple.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String sportsType;

    @Builder
    public Room(String title, String area, String sportsType) {
        this.title = title;
        this.area = area;
        this.sportsType = sportsType;
    }

}

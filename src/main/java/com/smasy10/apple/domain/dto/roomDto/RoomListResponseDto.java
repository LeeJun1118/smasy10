package com.smasy10.apple.domain.dto.roomDto;

import lombok.Getter;
import com.smasy10.apple.domain.Room;

import java.time.LocalDateTime;

@Getter
public class RoomListResponseDto {
    private Long id;
    private String title;
    private String area;
    private String sport;

    public RoomListResponseDto(Room room) {
        this.id = room.getId();
        this.title = room.getTitle();
        this.area = room.getArea();
        this.sport = room.getSport();
    }
}

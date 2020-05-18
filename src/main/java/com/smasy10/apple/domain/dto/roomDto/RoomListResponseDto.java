package com.smasy10.apple.domain.dto.roomDto;

import lombok.Getter;
import com.smasy10.apple.domain.Room;

import java.time.LocalDateTime;

@Getter
public class RoomListResponseDto {
    private Long id;
    private String title;
    private String area;
    private String sports;
    private String date;
    private LocalDateTime modifiedDate;
    private LocalDateTime createdDate;

    public RoomListResponseDto(Room room) {
        this.id = room.getId();
        this.title = room.getTitle();
        this.area = room.getArea();
        this.date = room.getDate();
        this.sports = room.getSports();
        this.createdDate = room.getCreatedDate();
        this.modifiedDate = room.getModifiedDate();
    }
}

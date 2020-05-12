package com.smasy10.apple.domain.dto.roomDto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class RoomListResponseDto {
    private Long id;
    private String title;
    private String area;
    private String sport;

    public RoomListResponseDto(Long id, String title, String area, String sport) {
        this.id = id;
        this.title = title;
        this.area = area;
        this.sport = sport;
    }
}

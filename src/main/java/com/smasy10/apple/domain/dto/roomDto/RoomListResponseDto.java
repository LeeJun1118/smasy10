package com.smasy10.apple.domain.dto.roomDto;

import lombok.Getter;

//방 리스트를 보여주기 위한 클래스

@Getter
public class RoomListResponseDto {
    private Long id;
    private String title;
    private String area;
    private String sport;
    private String date;

    public RoomListResponseDto(Long id, String title, String area, String sport, String date) {
        this.id = id;
        this.title = title;
        this.area = area;
        this.sport = sport;
        this.date = date;
    }
}

package com.smasy10.apple.domain.dto.roomDto;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import lombok.Getter;

import java.util.List;

//선택한 방 정보를 보여주는 클래스

@Getter
public class RoomResponseDto {

    private Long id;
    private List<User> user;
    private String title;
    private String area;
    private String sport;
    private String date;

    public RoomResponseDto(Room room){
        this.id = room.getId();
        this.user = room.getUsers();
        this.title = room.getTitle();
        this.area = room.getArea();
        this.sport = room.getSport();
        this.date = room.getDate();
    }
}

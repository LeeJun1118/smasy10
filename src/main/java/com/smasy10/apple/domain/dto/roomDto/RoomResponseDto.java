package com.smasy10.apple.domain.dto.roomDto;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import lombok.Getter;

import java.util.Date;
import java.util.List;

//선택한 방 정보를 보여주는 클래스

@Getter
public class RoomResponseDto {

    private Long id;
    //private List<User> users;
    private String title;
    private String area;
    private String sports;
    private String date;

    public RoomResponseDto(Room room){
        this.id = room.getId();
        //this.users = room.getUsers();
        this.title = room.getTitle();
        this.area = room.getArea();
        this.sports = room.getSports();
        this.date = room.getDate();
    }
}

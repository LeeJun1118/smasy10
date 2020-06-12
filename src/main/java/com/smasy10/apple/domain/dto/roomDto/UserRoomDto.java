package com.smasy10.apple.domain.dto.roomDto;


import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class UserRoomDto {

    private Long id;

    private List<HashMap<String,String>> users;

    private Long userId;
    private String userName;
    private String userEmail;

    private Long roomId;
    private String roomTitle;
    private String roomSports;
    private String roomDate;
    private String roomArea;

    public UserRoomDto(){}

    public UserRoomDto(UserRoom userRoom){
        this.id = userRoom.getId();


        this.userId = userRoom.getUser().getId();
        this.userName = userRoom.getUser().getName();
        this.userEmail = userRoom.getUser().getEmail();

        this.roomId = userRoom.getRoom().getId();
        this.roomTitle = userRoom.getRoom().getTitle();
        this.roomSports = userRoom.getRoom().getSports();
        this.roomDate = userRoom.getRoom().getDate();
        this.roomArea = userRoom.getRoom().getArea();

    }
}

package com.smasy10.apple.domain.dto.roomDto;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class RoomSaveRequestDto {
    private String title;
    private List<User> user;
    private String area;
    private String sport;
    private String date;

    @Builder
    public RoomSaveRequestDto(String title, List<User> user, String area, String sport,String date) {
        this.title = title;
        this.user = user;
        this.area = area;
        this.sport = sport;
        this.date = date;
    }

    public Room toEntity(){
        return Room.builder()
                .title(title)
                .area(area)
                .sport(sport)
                .date(date)
                .users(user)
                .build();
    }
}

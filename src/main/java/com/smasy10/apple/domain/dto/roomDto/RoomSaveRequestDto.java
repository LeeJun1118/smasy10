package com.smasy10.apple.domain.dto.roomDto;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RoomSaveRequestDto {
    private String title;
    private User headerId;
    private String area;
    private String sport;
    private String date;

    @Builder
    public RoomSaveRequestDto(String title, User headerId, String area, String sport,String date) {
        this.title = title;
        this.headerId = headerId;
        this.area = area;
        this.sport = sport;
        this.date = date;
    }

    public Room toEntity(){
        return Room.builder()
                .title(title)
                .headerId(headerId)
                .area(area)
                .sport(sport)
                .date(date)
                .build();
    }
}

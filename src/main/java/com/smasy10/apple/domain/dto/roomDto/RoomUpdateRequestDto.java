package com.smasy10.apple.domain.dto.roomDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RoomUpdateRequestDto {

    private String title;
    private String area;
    private String sport;

    @Builder
    public RoomUpdateRequestDto(String title, String area, String sport) {
        this.title = title;
        this.area = area;
        this.sport = sport;
    }
}

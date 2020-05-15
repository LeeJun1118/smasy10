package com.smasy10.apple.domain.dto.roomDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RoomUpdateRequestDto {

    private String title;
    private String area;
    private String sports;

    @Builder
    public RoomUpdateRequestDto(String title, String area, String sports) {
        this.title = title;
        this.area = area;
        this.sports = sports;
    }
}

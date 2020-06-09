package com.smasy10.apple.domain.dto.roomDto;

import com.smasy10.apple.domain.User;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
public class RoomDto {

    private Long id;

    @NotEmpty
    private String title;

    @NotEmpty
    private String area;

    @NotEmpty
    private String sports;

    @NotEmpty
    private String date;
}

package com.smasy10.apple.domain.dto;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.security.UserPrincipal;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
public class RoomDto {
    @NotEmpty
    private Long id;

    @NotEmpty
    private String title;

    @NotEmpty
    private String area;

    @NotEmpty
    private String sports;

    @NotEmpty
    private String date;

    @NotEmpty
    private Boolean state;

    @NotEmpty
    private Long head;
}

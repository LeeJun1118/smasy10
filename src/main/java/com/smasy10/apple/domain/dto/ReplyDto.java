package com.smasy10.apple.domain.dto;

import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.UserRoom;
import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class ReplyDto {

    @NotEmpty
    private Long id;

    @NotEmpty
    private String content;

    @NotEmpty
    private Long userId;
    @NotEmpty
    private String userName;

    @NotEmpty
    private Long roomId;

    public ReplyDto(){}

    public ReplyDto(Reply reply){
        this.id = reply.getId();
        this.content = reply.getContent();

        this.userId = reply.getUser().getId();
        this.userName = reply.getUser().getName();

        this.roomId = reply.getRoom().getId();
    }
}

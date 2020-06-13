package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import com.smasy10.apple.domain.dto.roomDto.ReplyDto;
import com.smasy10.apple.repository.ReplyRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.ReplyService;
import com.smasy10.apple.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReplyController {

    private final Logger log = LoggerFactory.getLogger(ReplyController.class);

    @Autowired
    private ReplyService replyService;

    private ReplyRepository replyRepository;
    private UserRepository userRepository;
    private RoomRepository roomRepository;


    @PostMapping(value = "/room/create/reply/{id}")
    public ResponseEntity<ReplyDto> createReply(@PathVariable Long id,
                                                @RequestBody ReplyDto replyDto,
                                                @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Reply : {}", replyDto);
        if (replyDto.getId() != null) {
            throw new ApiException("A new post cannot already have an ID", HttpStatus.CONFLICT);
        } else {
            ReplyDto returnReply = replyService.registerReply(id, replyDto, userPrincipal);
            return new ResponseEntity<ReplyDto>(returnReply, HttpStatus.CREATED);
        }
    }

}

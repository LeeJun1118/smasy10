package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.mapper.ReplyMapper;
import com.smasy10.apple.repository.ReplyRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
public class ReplyController {

    private final Logger log = LoggerFactory.getLogger(ReplyController.class);


    private final ReplyService replyService;

    private final ReplyRepository replyRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    private final ReplyMapper replyMapper;

    //방 댓글 보기
    //jwt 필요 (postman) - 로그인 시 이용 가능
    @GetMapping(value = "/room/replies/{id}")
    public List<ReplyDto> getReplies(@PathVariable Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));
        List<Reply> replies = replyRepository.findAllByRoom(room);
        return replies.stream()
                .map(reply -> replyMapper.toReplyDto(reply))
                .collect(Collectors.toList());
    }

    /*//방 댓글 쓰기 {id} 는 방번호
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
    }*/
    //방 댓글 쓰기 {id} 는 방번호
    @PostMapping(value = "/room/create/reply/{id}")
    public ResponseEntity<Reply> createReply(@PathVariable Long id,
                                                @RequestBody Reply reply,
                                                @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Reply : {}", reply);
        if (reply.getId() != null) {
            throw new ApiException("A new post cannot already have an ID", HttpStatus.CONFLICT);
        } else {
            Reply returnReply = replyService.registerReply(id, reply, userPrincipal);
            return new ResponseEntity<Reply>(returnReply, HttpStatus.CREATED);
        }
    }

    //방 댓글 수정 하기 {id} 는 댓글 pk
    @PutMapping(value = "/room/edit/reply/{id}")
    public ResponseEntity editReply(@PathVariable Long id,
                                    @RequestBody ReplyDto replyDto,
                                    @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Reply : {}", replyDto);
        if (replyDto.getId() != null) {
            throw new ApiException("A new post cannot already have an ID", HttpStatus.CONFLICT);
        } else {
            ReplyDto returnReply = replyService.editReply(id, replyDto, userPrincipal);
            return new ResponseEntity<ReplyDto>(returnReply, HttpStatus.OK);
        }
    }

    //댓글 삭제하기 {id} 는 댓글 pk
    @DeleteMapping(value = "/reply/delete/{id}")
    public ResponseEntity<Void> deleteReply(@PathVariable Long id, @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to delete Reply id : {}", id);
        if (id == null) {
            throw new ApiException("Reply id cannot null", HttpStatus.NOT_FOUND);
        } else {
            replyService.deleteReply(id, userPrincipal);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}

package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Place;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.mapper.ReplyMapper;
import com.smasy10.apple.repository.PlaceRepository;
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
public class ReviewController {
    private final Logger log = LoggerFactory.getLogger(ReplyController.class);


    private final ReplyService replyService;

    private final ReplyRepository replyRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    private final ReplyMapper replyMapper;

   /* //리뷰 보기
    //jwt 필요 (postman) - 로그인 시 이용 가능
    @GetMapping(value = "/place/replies/{id}")
    public List<ReplyDto> getReplies(@PathVariable Long id) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ApiException("Place does not exist", HttpStatus.NOT_FOUND));

        List<Reply> replies = replyRepository.findAllByPlace(place);
        return replies.stream()
                .map(reply -> replyMapper.toReplyDto(reply))
                .collect(Collectors.toList());
    }*/

    /*//리뷰 쓰기
    @PostMapping(value = "/place/review/create/{id}")
    public ResponseEntity<Reply> createReply(@PathVariable Long id,
                                             @RequestBody Reply reply,
                                             @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Reply : {}", reply);
        if (reply.getId() != null) {
            throw new ApiException("A new review cannot already have an ID", HttpStatus.CONFLICT);
        } else {
            Reply returnReview = replyService.registerReview(id, reply, userPrincipal);
            return new ResponseEntity<Reply>(returnReview, HttpStatus.CREATED);
        }
    }*/
}

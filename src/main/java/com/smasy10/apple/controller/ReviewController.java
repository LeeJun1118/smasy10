package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.common.Exception.BadRequestException;
import com.smasy10.apple.domain.*;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.mapper.ReplyMapper;
import com.smasy10.apple.repository.*;
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
    private final ReservationRepository reservationRepository;
    private final UserRoomRepoesitory userRoomRepoesitory;
    private final RoomRepository roomRepository;


    private final ReplyMapper replyMapper;

    //시설 리뷰 보기 {id}는 place pk
    //jwt 필요 (postman) - 로그인 시 이용 가능
    @GetMapping(value = "/place/replies/{id}")
    public List<ReplyDto> getReplies(@PathVariable Long id) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ApiException("Place does not exist", HttpStatus.NOT_FOUND));

        List<Reply> replies = replyRepository.findAllByPlace(place);
        return replies.stream()
                .map(reply -> replyMapper.toReplyDto(reply))
                .collect(Collectors.toList());
    }

    //리뷰 쓰기.  파라미터 = room pk
    //예약한 방이며 사용자가 그 방에 입장이 된 상태일때만 리뷰 작성 가능
    @PostMapping(value = "/place/review/create/{id}")
    public ResponseEntity<Reply> createReview(@PathVariable Long id,
                                             @RequestBody Reply reply,
                                             @CurrentUser UserPrincipal userPrincipal) {

        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        Reservation reservation = reservationRepository.findByRoom(room);

        Place place = placeRepository.findById(reservation.getPlace().getId())
                .orElseThrow(() -> new ApiException("Place does not exist", HttpStatus.NOT_FOUND));

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        Reply newReview = new Reply();

        newReview.setRoom(room);
        newReview.setPlace(place);
        newReview.setUser(user);

        newReview.setContent(reply.getContent());

        replyRepository.saveAndFlush(newReview);

        return ResponseEntity.status(HttpStatus.CREATED).body(newReview);
    }

    //리뷰 삭제하기 {id} 는 reply pk
    @DeleteMapping(value = "/place/review/delete/{id}")
    //@Transactional
    public Reply deleteReply(@PathVariable Long id, @CurrentUser UserPrincipal userPrincipal) {
        
        Reply reply = replyRepository.findById(id).
                orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));
        if(reply.getUser().getId() != userPrincipal.getId())
            throw new BadRequestException("It's not a writer.");

        replyRepository.delete(reply);
        //return "댓글이 삭제 되었습니다.";
        //return new ResponseEntity<Reply>(HttpStatus.OK);
        return reply;
    }
}

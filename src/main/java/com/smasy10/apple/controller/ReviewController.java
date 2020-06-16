package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
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

    //리뷰 쓰기 파라미터 = place pk
    //예약한 방이며 사용자가 그 방에 입장이 된 상태일때만 리뷰 작성 가능
   /* @PostMapping(value = "/place/review/create/{id}")
    public ResponseEntity<Reply> createReply(@PathVariable Long id,
                                             @RequestBody Reply reply,
                                             @CurrentUser UserPrincipal userPrincipal) {

        //예약 내역 테이블에서 place_id가 id인 room_id를 찾는다.
        Reservation reservation = reservationRepository.findByPlace(id);
        Room room = roomRepository.findById(reservation.getRoom().getId())
                .orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));
        UserRoom validateUser = new UserRoom();

        if (room == null)
            throw new ApiException("예약되지 않은 방입니다.", HttpStatus.CONFLICT);
        else{
            //userRoom 테이블에서 방id 가 찾은 id 이고 사용자 id가 userPrincipal.getId 이면 리뷰쓰기 가능
            List<UserRoom> checkRooms = userRoomRepoesitory.findAllByRoom(room);

            //방 id로 찾은 UserRoom 들 중에서 user_id 가 현재 유저가 맞는지 검사
            for (UserRoom u :checkRooms) {
                if(u.getUser().getId() == user.getId()){
                    validateUser = u;
                }
            }
        }
        if(validateUser == null)
            throw new ApiException("이용하지 않은 장소입니다.", HttpStatus.CONFLICT);
        else{
            Reply returnReview = replyService.registerReview(id, reply, userPrincipal);
            returnReview.setRoom(room);
            replyRepository.saveAndFlush(returnReview);
            return new ResponseEntity<Reply>(returnReview, HttpStatus.CREATED);
        }
    }*/
}

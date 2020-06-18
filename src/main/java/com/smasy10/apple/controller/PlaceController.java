package com.smasy10.apple.controller;


import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.PlaceReviewDto;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.domain.dto.RoomDto;
import com.smasy10.apple.mapper.ReplyMapper;
import com.smasy10.apple.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PlaceController {
    private final ReplyService replyService;
    private final ReplyMapper replyMapper;

    public final static String FIND_ALL_PLACE_SEARCH_REVIEW =
            /*"select r.id, r.content," +
                    " p.id as placeId,p.name,p.address,p.phone_no," +
                    " m.id as roomId,m.title,m.sports,m.date," +
                    " u.id as userId,u.name,u.email " +*/
            "select r,p,m,u"+
                    " from reply r INNER JOIN FETCH  r.place p ,r INNER JOIN FETCH  r.room m, r JOIN FETCH r.user u " +
                    " where r.place_id = p.id and " +
                    "      r.room_id = m.id and " +
                    "      r.user_id = u.id or " +
                    "      p.name = :text or " +
                    "      p.address = :text or " +
                    "      p.phone_no = :text or " +
                    "      m.title = :text or " +
                    "      m.area = :text or " +
                    "      m.sports = :text or " +
                    "      m.date  = :text or " +
                    "      u.name  = :text or " +
                    "      u.email = :text ";

    //시설 목록 보기 (검색: 시설 id, 시설 이름, 주소, 폰번호, 댓글 내용, 댓글 쓴 사람 이름)
    /*@GetMapping(value = "/place/reviews")
    public List<PlaceReviewDto> getRooms(@RequestParam(value = "text", required = false) String text) {

        //댓글에 place,room,user 가 잇음
        //place 아이디로 댓글을 찾아서 placedto 에
        List<Reply> searchReplies = replyService.getPlaceReviewContainingText(text);

        return searchReplies.stream()
                .map(reply -> replyMapper.toPlaceReviewDto(reply))
                .collect(Collectors.toList());
    }*/

    //시설 목록 보기 (검색: 시설 id, 시설 이름, 주소, 폰번호, 댓글 내용, 댓글 쓴 사람 이름)
    /*@GetMapping(value = "/place/reviews")
    public List<ReplyDto> getRooms() {
        List<Reply> replies = replyService.getReplies();

        return replies.stream()
                .map(reply -> replyMapper.toReplyDto(reply))
                .collect(Collectors.toList());
    }*/
}
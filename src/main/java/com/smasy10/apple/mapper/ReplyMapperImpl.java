package com.smasy10.apple.mapper;


import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.dto.PlaceReviewDto;
import com.smasy10.apple.domain.dto.ReplyDto;
import org.springframework.stereotype.Component;

import javax.annotation.Generated;

@Generated(
        value = "org.mapstruct.ap.MappingProcessor",
        date = "2020-05-27T20:39:46+0900",
        comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_241 (Oracle Corporation)"
)

@Component
public class ReplyMapperImpl implements ReplyMapper {

    @Override
    public ReplyDto toReplyDto(Reply reply) {
        if (reply == null)
            return null;
        ReplyDto replyDto = new ReplyDto();
        replyDto.setId(reply.getId());
        replyDto.setContent(reply.getContent());
        replyDto.setRoomId(reply.getRoom().getId());
        replyDto.setUserId(reply.getUser().getId());
        replyDto.setUserName(reply.getUser().getName());

        return replyDto;
    }

    @Override
    public PlaceReviewDto toPlaceReviewDto(Reply reply) {
        if (reply == null)
            return null;
        PlaceReviewDto placeReviewDto = new PlaceReviewDto();

        //place
        placeReviewDto.setPlaceId(reply.getPlace().getId());
        placeReviewDto.setPlaceName(reply.getPlace().getName());
        placeReviewDto.setPlaceAddress(reply.getPlace().getAddress());
        placeReviewDto.setPlacePhoneNo(reply.getPlace().getPhoneNo());
        placeReviewDto.setPlaceX(reply.getPlace().getPlaceX());
        placeReviewDto.setPlaceY(reply.getPlace().getPlaceY());

        //Reply
        placeReviewDto.setReplyId(reply.getId());
        placeReviewDto.setReplyContent(reply.getContent());

        //User
        placeReviewDto.setUserId(reply.getUser().getId());
        placeReviewDto.setUserName(reply.getUser().getName());
        placeReviewDto.setUserEmail(reply.getUser().getEmail());

        //Room
        placeReviewDto.setRoomId(reply.getRoom().getId());
        placeReviewDto.setRoomTitle(reply.getRoom().getTitle());
        placeReviewDto.setRoomSports(reply.getRoom().getSports());
        placeReviewDto.setRoomArea(reply.getRoom().getArea());
        placeReviewDto.setRoomDate(reply.getRoom().getDate());

        return placeReviewDto;
    }
}

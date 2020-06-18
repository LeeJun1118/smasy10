package com.smasy10.apple.domain.dto;

import com.smasy10.apple.domain.Reply;
import lombok.Data;

import javax.persistence.Column;

@Data
public class PlaceReviewDto {

    private Long placeId;
    private String placeName;
    private String placeAddress;
    private String placePhoneNo;

    private Long replyId;
    private String replyContent;

    private Long userId;
    private String userName;
    private String userEmail;

    private Long roomId;
    private String roomTitle;
    private String roomSports;
    private String roomArea;
    private String roomDate;

    public PlaceReviewDto(){}

    public PlaceReviewDto(Reply reply){
        this.placeId = reply.getPlace().getId();
        this.placeName = reply.getPlace().getName();
        this.placeAddress = reply.getPlace().getAddress();
        this.placePhoneNo = reply.getPlace().getPhoneNo();

        this.replyId = reply.getId();
        this.replyContent = reply.getContent();

        this.userId = reply.getUser().getId();
        this.userName = reply.getUser().getName();
        this.userEmail = reply.getUser().getEmail();

        this.roomId = reply.getRoom().getId();
        this.roomTitle = reply.getRoom().getTitle();
        this.roomSports = reply.getRoom().getSports();
        this.roomArea = reply.getRoom().getArea();
        this.roomDate = reply.getRoom().getDate();
    }
}

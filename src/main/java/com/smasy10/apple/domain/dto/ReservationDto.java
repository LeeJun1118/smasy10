package com.smasy10.apple.domain.dto;

import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Reservation;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;

@Data
public class ReservationDto {

    @NotEmpty
    private Long id;
    private String state;

    @NotEmpty
    private Long userId;
    @NotEmpty
    private String userName;
    @NotEmpty
    private String email;

    @NotEmpty
    private Long roomId;
    @NotEmpty
    private String roomSports;
    @NotEmpty
    private String roomTitle;
    @NotEmpty
    private String roomDate;
    @NotEmpty
    private String roomArea;
    @NotEmpty
    private Boolean roomState;
    @NotEmpty
    private Long roomHead;

    @NotEmpty
    private Long placeId;
    @NotEmpty
    private String placeName;
    @NotEmpty
    private String placeAddress;
    @NotEmpty
    private String placePhoneNo;

    private double placeX;
    private double placeY;

    public ReservationDto(){}

    public ReservationDto(Reservation reservation){
        this.id = reservation.getId();

        this.userId = reservation.getUser().getId();
        this.userName = reservation.getUser().getName();
        this.email = reservation.getUser().getEmail();

        this.roomId = reservation.getRoom().getId();
        this.roomTitle = reservation.getRoom().getTitle();
        this.roomDate = reservation.getRoom().getDate();
        this.roomArea = reservation.getRoom().getArea();
        this.roomState = reservation.getRoom().getState();
        this.roomHead = reservation.getRoom().getHead();

        this.placeId = reservation.getPlace().getId();
        this.placeName = reservation.getPlace().getName();
        this.placeAddress = reservation.getPlace().getAddress();
        this.placePhoneNo = reservation.getPlace().getPhoneNo();
        this.placeX = reservation.getPlace().getPlaceX();
        this.placeY = reservation.getPlace().getPlaceY();

    }
}

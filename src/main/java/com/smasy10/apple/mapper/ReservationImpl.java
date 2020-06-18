package com.smasy10.apple.mapper;

import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Reservation;
import com.smasy10.apple.domain.dto.ReservationDto;
import org.springframework.stereotype.Component;

import javax.annotation.Generated;

@Generated(
        value = "org.mapstruct.ap.MappingProcessor",
        date = "2020-05-27T20:39:46+0900",
        comments = "version: 1.3.1.Final, compiler: javac, environment: Java 1.8.0_241 (Oracle Corporation)"
)

@Component
public class ReservationImpl implements ReservationMapper {

    public ReservationDto toReservationDto(Reservation reservation) {
        if (reservation == null)
            return null;
        ReservationDto reservationDto = new ReservationDto();

        //Reservation
        reservationDto.setId(reservation.getId());
        reservationDto.setState(reservation.getState());

        //place
        reservationDto.setPlaceId(reservation.getPlace().getId());
        reservationDto.setPlaceName(reservation.getPlace().getName());
        reservationDto.setPlaceAddress(reservation.getPlace().getAddress());
        reservationDto.setPlacePhoneNo(reservation.getPlace().getPhoneNo());


        //Room
        reservationDto.setRoomId(reservation.getRoom().getId());
        reservationDto.setRoomTitle(reservation.getRoom().getTitle());
        reservationDto.setRoomSports(reservation.getRoom().getSports());
        reservationDto.setRoomArea(reservation.getRoom().getArea());
        reservationDto.setRoomDate(reservation.getRoom().getDate());


        reservationDto.setUserId(reservation.getUser().getId());
        reservationDto.setUserName(reservation.getUser().getName());

        return reservationDto;
    }
}

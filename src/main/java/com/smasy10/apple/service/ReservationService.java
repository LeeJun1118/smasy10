package com.smasy10.apple.service;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.*;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.domain.dto.ReservationDto;
import com.smasy10.apple.repository.PlaceRepository;
import com.smasy10.apple.repository.ReservationRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationService {

    private ReservationRepository reservationRepository;

    private RoomRepository roomRepository;
    private PlaceRepository placeRepository;


    public ReservationDto registerReservation(Long id, ReservationDto reservationDto, UserPrincipal userPrincipal) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        Reservation newReservation = new Reservation();
        newReservation.setRoom(new Room(room.getId()));
        newReservation.setUser(new User(userPrincipal.getId()));
        newReservation.setPlace(new Place(reservationDto.getPlaceId()));

        newReservation.setState(reservationDto.getState());

        return new ReservationDto(reservationRepository.saveAndFlush(newReservation));
    }

}

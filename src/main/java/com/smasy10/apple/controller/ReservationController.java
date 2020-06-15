package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Place;
import com.smasy10.apple.domain.Reservation;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.domain.dto.ReservationDto;
import com.smasy10.apple.repository.PlaceRepository;
import com.smasy10.apple.repository.ReservationRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.ReservationService;
import com.smasy10.apple.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReservationController {
    private final Logger log = LoggerFactory.getLogger(ReservationController.class);

    private final PlaceRepository placeRepository;
    private final RoomService roomService;
    private final ReservationRepository reservationRepository;

    //예약하기
    @PostMapping(value = "/room/reservation/{id}")
    public ResponseEntity createReservation(@PathVariable Long id,
                                            @RequestBody Place place,
                                            @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Place : {}", place);

        Place newPlace = placeRepository.save(place);

        Room room = roomService.findForId(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        Reservation newReservation = new Reservation();

        newReservation.setPlace(newPlace);
        newReservation.setUser(new User(userPrincipal.getId()));
        newReservation.setRoom(new Room(room.getId()));

        reservationRepository.save(newReservation);

        return ResponseEntity.status(HttpStatus.CREATED).body(newReservation);
    }

}

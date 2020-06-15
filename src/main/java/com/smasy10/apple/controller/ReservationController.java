package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Reservation;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.domain.dto.ReservationDto;
import com.smasy10.apple.repository.ReservationRepository;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.ReservationService;
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

    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService;

    /*//예약하기
    @PostMapping(value = "/room/reservation/{id}")
    public ResponseEntity<ReservationDto> createReservation(@PathVariable Long id,
                                                            @RequestBody ReservationDto reservationDto,
                                                            @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Reservation : {}", reservationDto);
        if (reservationDto.getId() != null) {
            throw new ApiException("A new post cannot already have an ID", HttpStatus.CONFLICT);
        } else {
            ReservationDto returnReservation = reservationService.registerReservation(id, reservationDto, userPrincipal);
            return new ResponseEntity<ReservationDto>(returnReservation, HttpStatus.CREATED);
        }
    }*/

}

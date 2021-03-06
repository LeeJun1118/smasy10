package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.*;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.domain.dto.ReservationDto;
import com.smasy10.apple.domain.dto.RoomDto;
import com.smasy10.apple.mapper.ReservationMapper;
import com.smasy10.apple.mapper.RoomMapper;
import com.smasy10.apple.repository.*;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.ReservationService;
import com.smasy10.apple.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class ReservationController {
    private final Logger log = LoggerFactory.getLogger(ReservationController.class);

    private final PlaceRepository placeRepository;
    private final RoomService roomService;
    private final ReservationRepository reservationRepository;
    private final ReservationService reservationService;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final UserRoomRepoesitory userRoomRepoesitory;
    private final RoomMapper roomMapper;
    private final ReservationMapper reservationMapper;

    //내가 입장한 방들 중에서 현재 예약된 방 목록
    @GetMapping(value = "/rooms/reservation/me")
    public List<ReservationDto> getMyReservationRooms(@CurrentUser UserPrincipal userPrincipal) {
        //UserRoom에서 user id가 현재 사용자 id인 room id 를 뽑아온다.
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        //현재 유저가 방에 입장한 방들 리스트
        List<UserRoom> userRooms = userRoomRepoesitory.findAllByUser(user);

        //모든 예약 내역
        List<Reservation> reservations = reservationRepository.findAll();

        //내가 입장해 있는 방
        List<Room> myRooms = new ArrayList<>();
        //userRooms 에서 빼낸 방들이 예약된 방이 아니면 출력해야함
        for (UserRoom room : userRooms) {
            myRooms.add(room.getRoom());
        }

        List<Reservation> myReservationRooms = new ArrayList<>();
        for (Reservation r : reservations) {
            for (Room m : myRooms) {
                if (r.getRoom().getId() == m.getId())
                    myReservationRooms.add(r);
            }
        }
        return myReservationRooms.stream()
                .map(reservation -> reservationMapper.toReservationDto(reservation))
                .collect(Collectors.toList());
    }

    //예약하기 {id} 는 방 pk
    @PostMapping(value = "/room/reservation/{id}")
    public Reservation createReservation(@PathVariable Long id,
                                         @RequestBody Place place,
                                         @CurrentUser UserPrincipal userPrincipal) {

        log.debug("REST request to save Place : {}", place);

        Place newPlace = placeRepository.save(place);

        Room room = roomService.findForId(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));
        room.setState(true);
        roomRepository.save(room);

        Reservation newReservation = new Reservation();

        newReservation.setPlace(newPlace);
        newReservation.setUser(new User(userPrincipal.getId()));
        newReservation.setRoom(room);

        reservationRepository.save(newReservation);

        //return ResponseEntity.status(HttpStatus.CREATED).body(newReservation);
        return newReservation;
    }

    //예약 취소 {id} 는 방 pk
    @DeleteMapping(value = "/room/reservation/cancel/{id}")
    public Reservation cancelReservation(@PathVariable Long id
            /*@CurrentUser UserPrincipal userPrincipal*/) {
        // 방 번호 id로 예약 내역 삭제
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        room.setState(false);
        roomRepository.save(room);

        Reservation reservation = reservationRepository.findByRoom(room);
        reservationRepository.delete(reservation);

        //return new ResponseEntity<>(HttpStatus.OK);
        return reservation;
    }

}

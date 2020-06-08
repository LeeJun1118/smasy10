package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.dto.roomDto.*;
import com.smasy10.apple.repository.RoomRepository;;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import com.smasy10.apple.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/*
 * https://github.com/keumtae-kim/spring-boot-react-blog/blob/master/blog-backend/src/main/java/me/ktkim/blog/
 * */

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final Logger log = LoggerFactory.getLogger(RoomController.class);

    private final RoomService roomService;
    private final RoomRepository roomRepository;

    //방 보기
    @GetMapping(value = "/api/room/{id}")
    public ResponseEntity<RoomResponseDto> getRoom(@PathVariable Long id) {
        log.debug("REST request to get Post : {}", id);
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Post does not exist", HttpStatus.NOT_FOUND));
        return new ResponseEntity<>(new RoomResponseDto(room), HttpStatus.OK);
    }

    //방 목록 보기
    @GetMapping(value = "/api/rooms")
    public ResponseEntity<List<RoomListResponseDto>> getRoomList(Pageable pageable) {
        log.debug("REST request to get Rooms : {}", pageable);
        Page<Room> rooms = roomService.findAllByOrderByIdPageable(pageable);
        Page<RoomListResponseDto> roomDto = rooms.map(room -> new RoomListResponseDto((room)));
        return new ResponseEntity<>(roomDto.getContent(), HttpStatus.OK);
    }
    //방 만들기
    @PostMapping(value = "/room/create")
    //밑에 있는 @RequestBody : 포스트맨에서 실행시만에 주석 달기 테스트 코드에서는 주석해제
    public ResponseEntity createRoom(@RequestBody Room room) {
        log.debug("REST request to create Room : {}", room);

        Room roomSaved = roomRepository.save(room);
        return ResponseEntity.status(HttpStatus.CREATED).body(roomSaved);
    }

    //방 수정
    @PutMapping(value = "/api/room/update/{id}")
    public ResponseEntity updateRoom(@PathVariable Long id, @RequestBody Room room) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.update(id, room));
    }

    @DeleteMapping(value = "/api/room/delete/{id}")
    public String deleteRoom(@PathVariable Long id) {
        return roomService.delete(id);
    }
}

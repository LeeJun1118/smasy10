package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.dto.roomDto.RoomListResponseDto;
import org.springframework.http.ResponseEntity;
import com.smasy10.apple.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.List;

/*
 * https://github.com/keumtae-kim/spring-boot-react-blog/blob/master/blog-backend/src/main/java/me/ktkim/blog/
 * */

@RestController
@RequestMapping("/api")
public class RoomController {

    private final Logger log = LoggerFactory.getLogger(RoomController.class);

    @Autowired
    private RoomService roomService;

    @GetMapping(value = "/enterAroom/{id}")
    public ResponseEntity<RoomListResponseDto> getRoom(@PathVariable Long id) {
        log.debug("REST request to get Post : {}", id);
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Post does not exist", HttpStatus.NOT_FOUND));
        return new ResponseEntity<>(new RoomListResponseDto(room), HttpStatus.OK);
    }

    @GetMapping(value = "/enterAroom")
    public ResponseEntity<List<RoomListResponseDto>> getRoomList(Pageable pageable) {
        log.debug("REST request to get Posts : {}", pageable);
        Page<Room> rooms = roomService.findAllByOrderByIdPageable(pageable);
        Page<RoomListResponseDto> roomDto = rooms.map(room -> new RoomListResponseDto((room)));
        return new ResponseEntity<>(roomDto.getContent(), HttpStatus.OK);
    }
}

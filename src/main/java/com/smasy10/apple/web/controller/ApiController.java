package com.smasy10.apple.web.controller;


import com.smasy10.apple.domain.Room;
import com.smasy10.apple.repository.RoomRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;


@RestController
@RequestMapping("/api")
public class ApiController {

    private final RoomRepository roomRepository;

    public ApiController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @GetMapping("/makeAroom")
    public ResponseEntity<String> ip (HttpServletRequest request) {
        // 요청을 보낸 클라이언트의 IP주소를 반환합니다.
        return ResponseEntity.ok(request.getRemoteAddr());
    }

    @GetMapping("/enterAroom")
    Collection<Room> rooms(){
        return roomRepository.findAll();
    }
}

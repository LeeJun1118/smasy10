package com.smasy10.apple.web.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api")
public class ApiController {

    @PostMapping("/makeAroom")
    public ResponseEntity<String> ip (HttpServletRequest request) {
        // 요청을 보낸 클라이언트의 IP주소를 반환합니다.
        return ResponseEntity.ok(request.getRemoteAddr());
    }
}

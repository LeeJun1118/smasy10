package com.smasy10.apple.controller;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import com.smasy10.apple.domain.dto.RoomDto;
import com.smasy10.apple.domain.dto.RoomResponseDto;
import com.smasy10.apple.mapper.RoomMapper;
import com.smasy10.apple.repository.RoomRepository;;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.repository.UserRoomRepoesitory;
import com.smasy10.apple.security.CurrentUser;
import com.smasy10.apple.security.UserPrincipal;
import com.smasy10.apple.service.UserRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import com.smasy10.apple.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.stream.Collectors;

/*
 * https://github.com/keumtae-kim/spring-boot-react-blog/blob/master/blog-backend/src/main/java/me/ktkim/blog/
 * */

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final Logger log = LoggerFactory.getLogger(RoomController.class);

    private final RoomService roomService;
    private final RoomRepository roomRepository;
    private final RoomMapper roomMapper;

    private final UserRoomRepoesitory userRoomRepoesitory;

    private final UserRepository userRepository;
    private final UserRoomService userRoomService;

    //방 정보 보여주기
    //jwt 필요 (postman)
    @GetMapping(value = "/rooms/enter/{id}")
    public ResponseEntity<RoomResponseDto> getRoom(@PathVariable Long id) {
        log.debug("REST request to get Room : {}", id);
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        return new ResponseEntity<>(new RoomResponseDto(room), HttpStatus.OK);
    }

    //방 입장하기 (UserRoom DB에 방, 유저 저장)
    @PostMapping(value = "/rooms/enter/{id}")
    //jwt 필요 (postman)
    public ResponseEntity enterRoom(@PathVariable Long id, @CurrentUser UserPrincipal userPrincipal) {

        UserRoom userRoom = new UserRoom();

        //로그인 중인 사용자 찾기
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        //파라미터로 받은 id의 방 찾기
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        //종목에 따른 인원 제한 없는 입장
        userRoom.setRoom(room);
        userRoom.setUser(user);

        //입장(저장)
        userRoomRepoesitory.save(userRoom);

        //종목에 따라 인원 제한
        //입장시 운동 종목에 따른 총 인원 수보다 적을 때만 입장 가능
        /*
        List<UserRoom> users = userRoomRepoesitory.findAllByRoom(room);
        if (room.getSports().equals("축구")) {
            if (users.size() >= 2)
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("인원이 모두 찼습니다.");
            else {
                userRoom.setRoom(room);
                userRoom.setUser(user);

                //입장(저장)
                userRoomRepoesitory.save(userRoom);
            }
        }
        else if (room.getSports().equals("야구")) {
            if (users.size() >= 2)
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("인원이 모두 찼습니다.");
            else {
                userRoom.setRoom(room);
                userRoom.setUser(user);

                //입장(저장)
                userRoomRepoesitory.save(userRoom);
            }
        }*/


        return ResponseEntity.status(HttpStatus.CREATED).body(userRoom);
    }

    //현재 방에 입장해 있는 유저 수
    @GetMapping(value = "/rooms/enter/user/count/{id}")
    //jwt 필요 (postman)
    public ResponseEntity<Integer> userCount(@PathVariable Long id) {
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        //userRoomRepository 에서 room id가 {id}인 유저 아이디를 전부 뽑아
        List<UserRoom> users = userRoomRepoesitory.findAllByRoom(room);

        //return users.size();
        return ResponseEntity.status(HttpStatus.OK).body(users.size());
    }

    //방에 입장한 유저들의 정보와 입장한 방의 정보 보여줌
    @GetMapping(value = "/rooms/enter/users/info/{id}")
    //jwt 필요 (postman)
    public List<UserRoom> userList(@PathVariable Long id) {
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        //userRoomRepository 에서 room id가 {id}인 유저 아이디를 전부 뽑아
        List<UserRoom> users = userRoomRepoesitory.findAllByRoom(room);

        return users.stream().collect(Collectors.toList());
    }

    //방 목록 보기 (검색: 방의 id,title,area,sprots,date)
    @GetMapping(value = "/api/rooms")
    public List<RoomDto> getRooms(@RequestParam(value = "text", required = false) String text) {
        List<Room> rooms = (text == null) ? roomService.getRooms() : roomService.getRoomsContainingText(text);
        return rooms.stream()
                .map(room -> roomMapper.toRoomDto(room))
                .collect(Collectors.toList());
    }

    //방 만들기
    @PostMapping(value = "/room/create")
    //jwt 필요 (postman)
    public ResponseEntity createRoom(@RequestBody Room room,
                                     @CurrentUser UserPrincipal userPrincipal) {
        log.debug("REST request to create Room : {}", room);
        /*Room saveRoom = roomService.registerRoom(room, userPrincipal);*/
        Room newRoom = roomRepository.save(room);

        UserRoom newUserRoom = new UserRoom();
        newUserRoom.setRoom(newRoom);

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));
        newUserRoom.setUser(user);

        userRoomRepoesitory.save(newUserRoom);

        return ResponseEntity.status(HttpStatus.CREATED).body(newRoom);
    }

    // -> 추후 방장이 방 수정할 수 있게 하기
    /*//방 수정
    @PutMapping(value = "/api/room/update/{id}")
    public ResponseEntity updateRoom(@PathVariable Long id, @RequestBody Room room) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.update(id, room));
    }*/


    @DeleteMapping(value = "/room/exit/{id}")
    @Transactional
    public ResponseEntity<Void> exitRoom(@PathVariable Long id, @CurrentUser UserPrincipal userPrincipal){

        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        //userRoomRepoesitory.deleteUserRoomByUserAndRoom(userPrincipal.getId(), id);
        userRoomRepoesitory.deleteUserRoomByUserAndRoom(user,room);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

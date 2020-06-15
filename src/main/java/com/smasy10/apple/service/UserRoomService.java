package com.smasy10.apple.service;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.repository.UserRoomRepoesitory;
import com.smasy10.apple.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserRoomService {
    private final UserRoomRepoesitory userRoomRepoesitory;
    private final RoomService roomService;
    private final UserService userService;
    private final UserRepository userRepository;

    public UserRoom validateUserRoom(Long id, UserPrincipal userPrincipal) {
        Room room = roomService.findForId(id).orElseThrow(() -> new ApiException("Room does not exist", HttpStatus.NOT_FOUND));
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));
        List<UserRoom> checkRooms = userRoomRepoesitory.findAllByRoom(room);
        UserRoom validate = new UserRoom();
        for (UserRoom u :checkRooms) {
            if(u.getUser().getId() == user.getId()){
                validate = u;
                return u;
            }
        }
        return validate;
    }

    /*public Optional<UserRoom> findByRoom(Room room) {
        return userRoomRepoesitory.findByRoom(room);
    }*/

}

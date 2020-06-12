package com.smasy10.apple.service;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.UserRoom;
import com.smasy10.apple.repository.UserRoomRepoesitory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserRoomService {
    private final UserRoomRepoesitory userRoomRepoesitory;

    /*public Optional<UserRoom> findByRoom(Room room) {
        return userRoomRepoesitory.findByRoom(room);
    }*/

}

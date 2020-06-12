package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.UserRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRoomRepoesitory extends JpaRepository<UserRoom,Long> {

    List<UserRoom> findAllByRoom(Room room);

}

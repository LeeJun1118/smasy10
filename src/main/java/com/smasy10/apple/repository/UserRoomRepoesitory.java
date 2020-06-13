package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRoomRepoesitory extends JpaRepository<UserRoom,Long> {

    List<UserRoom> findAllByRoom(Room room);

    /*@Query("DELETE FROM UserRoom u WHERE u.user =:user_id and u.room =: room_id")
    void deleteUserRoomByUserAndRoom(@Param("user_id") Long user_id,@Param("room_id") Long room_id);*/

    void deleteUserRoomByUserAndRoom(User user,Room room);
}

package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);



/*
    @Query("From User u WHERE u.id in (SELECT user_id FROM user_room ur WHERE room_id = id)")
    List<User> findAllByRoom(@Param("id") Long id);
*/

}

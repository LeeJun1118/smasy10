package com.smasy10.apple.repository;

import com.smasy10.apple.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply,Long> {

/*
    @Query("FROM Reply r WHERE r.room =: roomId ")
    List<Reply> findAllByRoom(Long roomId);
*/

    List<Reply> findAllByRoom(Room room);

    Optional<Reply> findById(Long id);

    void deleteAllByRoom(Room room);

    List<Reply> findAllByPlace(Place place);
}

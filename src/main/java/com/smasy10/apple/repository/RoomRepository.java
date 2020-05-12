package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/*
* https://github.com/keumtae-kim/spring-boot-react-blog/blob/master/blog-backend/src/main/java/me/ktkim/blog/
* */
public interface RoomRepository extends JpaRepository<Room,Long> {
    @Query("From Room r WHERE r.id=:searchText OR r.title=:searchText OR r.area=:searchText OR r.sports=:searchText ORDER BY r.id")
    Page<Room> findAllRooms(Pageable pageable, @Param("searchText") String searchText);

    Page<Room> findAllByOrderById(Pageable pageable);

    Optional<Room> findById(Long id);
}

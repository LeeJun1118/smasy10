package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room,Long> {

    Page<Room> findAllByOrderById(Pageable pageable);

    Optional<Room> findById(Long id);

    List<Room> findBySportsContainingOrTitleContainingOrAreaContainingOrDateContainingOrderByDate(String sports,String title,String area, String date);


    List<Room> findAllByOrderByDate();
}

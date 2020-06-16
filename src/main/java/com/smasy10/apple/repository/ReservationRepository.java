package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Reservation;
import com.smasy10.apple.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    void deleteAllByRoom(Room room);

    Reservation findByRoom(Room room);
}

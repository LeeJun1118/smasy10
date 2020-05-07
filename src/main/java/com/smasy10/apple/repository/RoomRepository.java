package com.smasy10.apple.repository;

import com.smasy10.apple.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room,Long> {
}

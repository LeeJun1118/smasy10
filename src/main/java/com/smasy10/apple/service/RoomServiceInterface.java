package com.smasy10.apple.service;

import com.smasy10.apple.domain.Room;

import java.util.List;

public interface RoomServiceInterface {
    List<Room> getRooms();

    List<Room> getRoomsContainingText(String text);

    Room saveRoom(Room room);
}

package com.smasy10.apple.service;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.UserRoom;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.repository.UserRoomRepoesitory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RoomService implements RoomServiceInterface {

    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final UserRoomRepoesitory userRoomRepoesitory;

    public Optional<Room> findForId(Long id) {
        return roomRepository.findById(id);
    }

    public Page<Room> findAllByOrderByIdPageable(Pageable pageable) {
        return roomRepository.findAllByOrderById(pageable);
    }

    public Room update(Long id, Room requestDto) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id = " + id));

        room.update(requestDto.getTitle(), requestDto.getArea(), requestDto.getSports());
        //return "updated room. " +"id = " + id;
        return room;
    }

    public String delete(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id = " + id));
        roomRepository.delete(room);
        return "deleted : " + "id" + id;
    }

    @Override
    public List<Room> getRooms() {
        return roomRepository.findAllByOrderByDate();
    }

    @Override
    public List<Room> getRoomsContainingText(String text) {
        return roomRepository.findBySportsContainingOrTitleContainingOrderByTitle(text, text);
    }

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    /*public Room registerRoom(Room room, @CurrentUser UserPrincipal userPrincipal) {

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("Post does not exist", HttpStatus.NOT_FOUND));

*//*
        user.setRoom(room);
        userRepository.save(user);
*//*
        UserRoom newUserRoom = new UserRoom();
        newUserRoom.setUser(user);
        newUserRoom.setRoom(room);
        userRoomRepoesitory.save(newUserRoom);

        return roomRepository.save(room);
    }*/
}

package com.smasy10.apple.service;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public Optional<Room> findForId(Long id) {
        return roomRepository.findById(id);
    }

    public Page<Room> findAllByOrderByCreatedDateDescPageable(Pageable pageable) {
        return roomRepository.findAllByOrderById(pageable);
    }
}

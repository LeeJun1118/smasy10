package com.smasy10.apple.service;

import com.smasy10.apple.domain.Room;
import com.smasy10.apple.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public Optional<Room> findForId(Long id) {
        return roomRepository.findById(id);
    }

    public Page<Room> findAllByOrderByIdPageable(Pageable pageable) {
        return roomRepository.findAllByOrderById(pageable);
    }
}

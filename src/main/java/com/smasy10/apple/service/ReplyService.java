package com.smasy10.apple.service;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.dto.roomDto.ReplyDto;
import com.smasy10.apple.repository.ReplyRepository;
import com.smasy10.apple.repository.RoomRepository;
import com.smasy10.apple.repository.UserRepository;
import com.smasy10.apple.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReplyService {

    private final ReplyRepository replyRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    public ReplyDto registerReply(Long id, ReplyDto replyDto, UserPrincipal userPrincipal) {

        Reply newReply = new Reply();
        newReply.setContent(replyDto.getContent());

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));


        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        newReply.setUser(user);
        newReply.setRoom(room);

        return new ReplyDto(replyRepository.saveAndFlush(newReply));
    }


}

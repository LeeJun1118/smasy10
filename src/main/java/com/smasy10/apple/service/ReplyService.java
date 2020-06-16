package com.smasy10.apple.service;

import com.smasy10.apple.common.Exception.ApiException;
import com.smasy10.apple.common.Exception.BadRequestException;
import com.smasy10.apple.domain.Place;
import com.smasy10.apple.domain.Reply;
import com.smasy10.apple.domain.Room;
import com.smasy10.apple.domain.User;
import com.smasy10.apple.domain.dto.ReplyDto;
import com.smasy10.apple.repository.PlaceRepository;
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
    private final PlaceRepository placeRepository;

    public Reply registerReply(Long id, Reply reply, UserPrincipal userPrincipal) {

        Reply newReply = new Reply();
        newReply.setContent(reply.getContent());

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));


        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        newReply.setUser(user);
        newReply.setRoom(room);

        return replyRepository.saveAndFlush(newReply);
    }

    public ReplyDto editReply(Long id, Reply reply, UserPrincipal userPrincipal) {
        Reply editReply = replyRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        if(editReply.getUser().getId() != user.getId())
            throw new BadRequestException("It's not a writer.");
        else
            editReply.setContent(reply.getContent());
        replyRepository.save(editReply);

        return new ReplyDto(replyRepository.save(editReply));
    }

    public void deleteReply(Long id, UserPrincipal userPrincipal) {
        Reply reply = replyRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        if(reply.getUser().getId() != user.getId())
            throw new BadRequestException("It's not a writer.");
        else
            replyRepository.delete(reply);
    }

    public Reply registerReview(Long id, Reply reply, UserPrincipal userPrincipal) {
        Reply newReply = new Reply();
        newReply.setContent(reply.getContent());

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));


        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ApiException("User does not exist", HttpStatus.NOT_FOUND));

        newReply.setUser(user);
        newReply.setPlace(place);

        return replyRepository.saveAndFlush(newReply);
    }
}
